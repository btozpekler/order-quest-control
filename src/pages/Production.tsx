
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Factory, AlertCircle, CheckCircle2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const Production = () => {
  const { data: productions = [], isLoading } = useQuery({
    queryKey: ['productions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('production')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching productions:', error);
        throw error;
      }

      return data || [];
    },
  });

  const activeProductions = productions.filter(p => p.status === 'Üretimde');
  const completedProductions = productions.filter(p => p.status === 'Tamamlandı');
  const dailyProduction = productions
    .filter(p => {
      const today = new Date();
      const productionDate = new Date(p.created_at);
      return (
        productionDate.getDate() === today.getDate() &&
        productionDate.getMonth() === today.getMonth() &&
        productionDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((acc, curr) => acc + Number(curr.quantity), 0);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Üretim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Günlük Üretim</h3>
                <p className="text-3xl font-bold mt-2">{dailyProduction} kg</p>
              </div>
              <Factory className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Aktif Üretim Emirleri</h3>
                <p className="text-3xl font-bold mt-2">{activeProductions.length}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Tamamlanan Üretimler</h3>
                <p className="text-3xl font-bold mt-2">{completedProductions.length}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Aktif Üretimler</h2>
            <div className="space-y-4">
              {activeProductions.map((production) => (
                <div key={production.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{production.product_type}</h3>
                    <p className="text-sm text-gray-600">Lot: #{production.batch_number}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{production.quantity} kg</p>
                    <p className="text-sm text-blue-600">Üretimde</p>
                  </div>
                </div>
              ))}
              {activeProductions.length === 0 && (
                <p className="text-gray-500 text-center py-4">Aktif üretim bulunmuyor</p>
              )}
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Hammadde Durumu</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">Mısır</span>
                <span className="text-green-600">Yeterli Stok</span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <span className="font-medium">Soya</span>
                <span className="text-yellow-600">Kritik Seviye</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Production;
