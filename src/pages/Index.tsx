
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Package, TrendingUp, Truck, Users, AlertCircle } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  trend,
  status 
}: { 
  icon: any, 
  title: string, 
  value: string, 
  trend: string,
  status?: "warning" | "success" | "error"
}) => (
  <Card className="glass-card p-6 hover-scale">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h3 className="text-2xl font-semibold mt-2">{value}</h3>
        <p className={`text-sm mt-2 ${
          status === "warning" ? "text-yellow-600" :
          status === "error" ? "text-red-600" :
          "text-green-600"
        }`}>{trend}</p>
      </div>
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
  </Card>
);

const Index = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Üretim Takip Sistemi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Package}
            title="Günlük Üretim"
            value="1,234 ton"
            trend="Hedefin %95'i tamamlandı"
            status="success"
          />
          <StatCard
            icon={Users}
            title="Aktif Siparişler"
            value="48"
            trend="8 sipariş kritik seviyede"
            status="warning"
          />
          <StatCard
            icon={Truck}
            title="Bekleyen Sevkiyat"
            value="15"
            trend="3 acil teslimat"
            status="error"
          />
          <StatCard
            icon={TrendingUp}
            title="Toplam Satış"
            value="₺845,000"
            trend="+15.3% geçen aya göre"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Kritik Stok Seviyeleri</h2>
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium">03.05 Granül Yem</span>
                <span className="text-yellow-600">Stok: 250 kg</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-medium">2mm Alabalık Yemi</span>
                <span className="text-red-600">Stok: 100 kg</span>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Günlük Üretim Planı</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium">8mm Renkli Yem</span>
                  <p className="text-sm text-gray-600">Lot: #YM2024001</p>
                </div>
                <span className="text-green-600">1500 kg</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <span className="font-medium">2mm Alabalık Yemi</span>
                  <p className="text-sm text-gray-600">Lot: #YM2024002</p>
                </div>
                <span className="text-green-600">2000 kg</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
