
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { BarChart, FileText, TrendingUp } from "lucide-react";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Raporlar</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Toplam Üretim</h3>
                <p className="text-3xl font-bold mt-2">45,230 kg</p>
              </div>
              <BarChart className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Toplam Sipariş</h3>
                <p className="text-3xl font-bold mt-2">156</p>
              </div>
              <FileText className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Büyüme Oranı</h3>
                <p className="text-3xl font-bold mt-2">+24%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Ürün Satış Raporu</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">03.05 Granül Yem</h3>
                  <span className="text-green-600">+15%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">2mm Alabalık Yemi</h3>
                  <span className="text-green-600">+32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Müşteri Analizi</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Aktif Müşteriler</h3>
                <p className="text-2xl font-bold">248</p>
                <p className="text-sm text-gray-600 mt-1">Geçen aya göre +12 artış</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium mb-2">Toplam Sipariş Değeri</h3>
                <p className="text-2xl font-bold">₺1,245,000</p>
                <p className="text-sm text-gray-600 mt-1">Son 30 gün</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
