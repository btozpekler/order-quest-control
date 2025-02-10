
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Settings as SettingsIcon, 
  Building, 
  Package, 
  Bell,
  MessageSquare,
  Plus,
  Save
} from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";

interface Settings {
  id: string;
  company_name: string;
  tax_number: string;
  auto_stock_update: boolean;
  critical_stock_notifications: boolean;
  whatsapp_notifications: boolean;
  email_notifications: boolean;
}

const Settings = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [settings, setSettings] = useState<Settings | null>(null);
  const [newCategory, setNewCategory] = useState("");

  const { data: productCategories = [], isLoading: categoriesLoading } = useQuery({
    queryKey: ['productCategories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_categories')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const { data: settingsData, isLoading: settingsLoading } = useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data;
    },
  });

  useEffect(() => {
    if (settingsData) {
      setSettings(settingsData);
    }
  }, [settingsData]);

  const saveSettings = async () => {
    try {
      if (!settings) return;

      const { error } = settings.id 
        ? await supabase
            .from('settings')
            .update(settings)
            .eq('id', settings.id)
        : await supabase
            .from('settings')
            .insert([settings]);

      if (error) throw error;

      toast({
        title: "Başarılı",
        description: "Ayarlar kaydedildi.",
      });

      queryClient.invalidateQueries({ queryKey: ['settings'] });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Hata",
        description: "Ayarlar kaydedilirken bir hata oluştu.",
        variant: "destructive",
      });
    }
  };

  const addProductCategory = async () => {
    if (!newCategory.trim()) return;

    try {
      const { error } = await supabase
        .from('product_categories')
        .insert([{ name: newCategory.trim() }]);

      if (error) throw error;

      setNewCategory("");
      queryClient.invalidateQueries({ queryKey: ['productCategories'] });
      
      toast({
        title: "Başarılı",
        description: "Kategori eklendi.",
      });
    } catch (error) {
      console.error('Error adding category:', error);
      toast({
        title: "Hata",
        description: "Kategori eklenirken bir hata oluştu.",
        variant: "destructive",
      });
    }
  };

  const deleteProductCategory = async (id: string) => {
    try {
      const { error } = await supabase
        .from('product_categories')
        .delete()
        .eq('id', id);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['productCategories'] });
      
      toast({
        title: "Başarılı",
        description: "Kategori silindi.",
      });
    } catch (error) {
      console.error('Error deleting category:', error);
      toast({
        title: "Hata",
        description: "Kategori silinirken bir hata oluştu.",
        variant: "destructive",
      });
    }
  };

  if (settingsLoading) {
    return (
      <DashboardLayout>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Ayarlar</h1>
          <Button onClick={saveSettings}>
            <Save className="w-4 h-4 mr-2" />
            Kaydet
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">Genel Ayarlar</TabsTrigger>
            <TabsTrigger value="notifications">Bildirim Ayarları</TabsTrigger>
            <TabsTrigger value="products">Ürün Kategorileri</TabsTrigger>
            <TabsTrigger value="messaging">Mesajlaşma</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Firma Bilgileri</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label>Firma Adı</label>
                  <Input 
                    placeholder="Firma adını giriniz" 
                    value={settings?.company_name || ''}
                    onChange={(e) => setSettings(prev => prev ? {...prev, company_name: e.target.value} : null)}
                  />
                </div>
                <div className="space-y-2">
                  <label>Vergi Numarası</label>
                  <Input 
                    placeholder="Vergi numarasını giriniz" 
                    value={settings?.tax_number || ''}
                    onChange={(e) => setSettings(prev => prev ? {...prev, tax_number: e.target.value} : null)}
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 mt-4">
              <h2 className="text-xl font-semibold mb-4">Sistem Ayarları</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Otomatik Stok Güncellemesi</span>
                  <Button
                    variant={settings?.auto_stock_update ? "default" : "outline"}
                    onClick={() => setSettings(prev => prev ? {...prev, auto_stock_update: !prev.auto_stock_update} : null)}
                  >
                    {settings?.auto_stock_update ? 'Aktif' : 'Pasif'}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kritik Stok Bildirimleri</span>
                  <Button
                    variant={settings?.critical_stock_notifications ? "default" : "outline"}
                    onClick={() => setSettings(prev => prev ? {...prev, critical_stock_notifications: !prev.critical_stock_notifications} : null)}
                  >
                    {settings?.critical_stock_notifications ? 'Aktif' : 'Pasif'}
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Bildirim Tercihleri</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>WhatsApp Bildirimleri</span>
                  <Button
                    variant={settings?.whatsapp_notifications ? "default" : "outline"}
                    onClick={() => setSettings(prev => prev ? {...prev, whatsapp_notifications: !prev.whatsapp_notifications} : null)}
                  >
                    {settings?.whatsapp_notifications ? 'Aktif' : 'Pasif'}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>E-posta Bildirimleri</span>
                  <Button
                    variant={settings?.email_notifications ? "default" : "outline"}
                    onClick={() => setSettings(prev => prev ? {...prev, email_notifications: !prev.email_notifications} : null)}
                  >
                    {settings?.email_notifications ? 'Aktif' : 'Pasif'}
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Ürün Kategorileri</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input 
                    placeholder="Yeni kategori adı" 
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  />
                  <Button onClick={addProductCategory}>
                    <Plus className="w-4 h-4 mr-2" />
                    Ekle
                  </Button>
                </div>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <div key={category.id} className="flex items-center justify-between p-2 border rounded">
                      <span>{category.name}</span>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => deleteProductCategory(category.id)}
                        >
                          Sil
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="messaging">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">WhatsApp Entegrasyonu</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label>WhatsApp API Anahtarı</label>
                  <Input type="password" placeholder="API anahtarını giriniz" />
                </div>
                <Button>Bağlantıyı Test Et</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
