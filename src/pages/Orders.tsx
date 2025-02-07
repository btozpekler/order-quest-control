
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Package, Truck, AlertCircle } from "lucide-react";

const Orders = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Siparişler</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Aktif Siparişler</h3>
                <p className="text-3xl font-bold mt-2">48</p>
              </div>
              <Package className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Sevkiyat Bekleyen</h3>
                <p className="text-3xl font-bold mt-2">15</p>
              </div>
              <Truck className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Kritik Siparişler</h3>
                <p className="text-3xl font-bold mt-2 text-yellow-600">8</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-6">Sipariş Listesi</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Sipariş No</th>
                  <th className="text-left py-4">Müşteri</th>
                  <th className="text-left py-4">Ürün</th>
                  <th className="text-left py-4">Miktar</th>
                  <th className="text-left py-4">Sevk Tarihi</th>
                  <th className="text-left py-4">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">SP2024001</td>
                  <td>A Firması</td>
                  <td>03.05 Granül Yem</td>
                  <td>20 Kova</td>
                  <td>03.01.2025</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Hazır</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">SP2024002</td>
                  <td>B Firması</td>
                  <td>2mm Alabalık Yemi</td>
                  <td>80 Çuval</td>
                  <td>03.01.2025</td>
                  <td><span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Üretimde</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
