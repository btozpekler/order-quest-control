
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Truck, PackageCheck, MapPin } from "lucide-react";

const Shipping = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Sevkiyat</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Günlük Sevkiyat</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>
              <Truck className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Hazır Siparişler</h3>
                <p className="text-3xl font-bold mt-2">24</p>
              </div>
              <PackageCheck className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Toplam Teslimat</h3>
                <p className="text-3xl font-bold mt-2">8</p>
              </div>
              <MapPin className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-6">Günlük Sevkiyat Listesi</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">İrsaliye No</th>
                  <th className="text-left py-4">Müşteri</th>
                  <th className="text-left py-4">Teslimat Adresi</th>
                  <th className="text-left py-4">Ürünler</th>
                  <th className="text-left py-4">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">SEV2024001</td>
                  <td>A Firması</td>
                  <td>Mudurnu / Bolu</td>
                  <td>03.05 Granül Yem (20 Kova)</td>
                  <td><span className="text-blue-600 bg-blue-100 px-2 py-1 rounded">Yolda</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">SEV2024002</td>
                  <td>B Firması</td>
                  <td>Akyazı / Sakarya</td>
                  <td>2mm Alabalık Yemi (80 Çuval)</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Teslim Edildi</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Shipping;
