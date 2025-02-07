
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Settings as SettingsIcon, 
  Building, 
  Package, 
  Bell,
  MessageSquare
} from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Ayarlar</h1>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">Genel Ayarlar</TabsTrigger>
            <TabsTrigger value="notifications">Bildirim Ayarları</TabsTrigger>
            <TabsTrigger value="products">Ürün Kategorileri</TabsTrigger>
            <TabsTrigger value="messaging">Mesajlaşma</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Firma Bilgileri</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label>Firma Adı</label>
                  <Input placeholder="Firma adını giriniz" />
                </div>
                <div className="space-y-2">
                  <label>Vergi Numarası</label>
                  <Input placeholder="Vergi numarasını giriniz" />
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Sistem Ayarları</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Otomatik Stok Güncellemesi</span>
                  <Button>Aktif</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>Kritik Stok Bildirimleri</span>
                  <Button>Aktif</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Bildirim Tercihleri</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>WhatsApp Bildirimleri</span>
                  <Button>Aktif</Button>
                </div>
                <div className="flex items-center justify-between">
                  <span>E-posta Bildirimleri</span>
                  <Button>Aktif</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Ürün Kategorileri</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Input placeholder="Yeni kategori adı" />
                  <Button>Ekle</Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span>Granül Yemler</span>
                    <Button variant="ghost" size="sm">Düzenle</Button>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span>Alabalık Yemleri</span>
                    <Button variant="ghost" size="sm">Düzenle</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="messaging" className="space-y-4">
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
