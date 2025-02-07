
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Factory, AlertCircle, CheckCircle2 } from "lucide-react";

const Production = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Üretim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Günlük Üretim</h3>
                <p className="text-3xl font-bold mt-2">1,234 ton</p>
              </div>
              <Factory className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Aktif Üretim Emirleri</h3>
                <p className="text-3xl font-bold mt-2">5</p>
              </div>
              <AlertCircle className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Tamamlanan Üretimler</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Aktif Üretimler</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-medium">8mm Renkli Yem</h3>
                  <p className="text-sm text-gray-600">Lot: #YM2024001</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">1500 kg</p>
                  <p className="text-sm text-blue-600">Devam Ediyor</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div>
                  <h3 className="font-medium">2mm Alabalık Yemi</h3>
                  <p className="text-sm text-gray-600">Lot: #YM2024002</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">2000 kg</p>
                  <p className="text-sm text-green-600">Paketleme</p>
                </div>
              </div>
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
