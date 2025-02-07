
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Calendar, ClipboardList, AlertCircle } from "lucide-react";

const ProductionPlanning = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Üretim Planlama</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Planlanan Üretim</h3>
                <p className="text-3xl font-bold mt-2">3,500 kg</p>
              </div>
              <Calendar className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Bekleyen Siparişler</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>
              <ClipboardList className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Kritik Ürünler</h3>
                <p className="text-3xl font-bold mt-2 text-yellow-600">4</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Üretim Planı</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">03.05 Granül Yem</h3>
                  <span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded text-sm">Öncelikli</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Planlanan: 1000 kg</span>
                  <span>Başlangıç: 05.01.2024</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">2mm Alabalık Yemi</h3>
                  <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded text-sm">Normal</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Planlanan: 2500 kg</span>
                  <span>Başlangıç: 06.01.2024</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Kaynak Kullanımı</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Hat 1</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Kapasite Kullanımı</span>
                  <span>70%</span>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Hat 2</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span>Kapasite Kullanımı</span>
                  <span>45%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProductionPlanning;
