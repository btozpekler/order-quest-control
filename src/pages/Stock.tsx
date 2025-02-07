
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { AlertCircle, ArrowUpDown, Package } from "lucide-react";

const Stock = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Stok Yönetimi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Toplam Stok</h3>
                <p className="text-3xl font-bold mt-2">124,500 kg</p>
              </div>
              <Package className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Kritik Stoklar</h3>
                <p className="text-3xl font-bold mt-2 text-yellow-600">8 ürün</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Stok Hareketleri</h3>
                <p className="text-3xl font-bold mt-2">+2,450 kg</p>
              </div>
              <ArrowUpDown className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-6">Stok Listesi</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Ürün Kodu</th>
                  <th className="text-left py-4">Ürün Adı</th>
                  <th className="text-left py-4">Stok Miktarı</th>
                  <th className="text-left py-4">Birim</th>
                  <th className="text-left py-4">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">03.05</td>
                  <td>Granül Yem</td>
                  <td>250</td>
                  <td>kg</td>
                  <td><span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Kritik</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">02.00</td>
                  <td>2mm Alabalık Yemi</td>
                  <td>100</td>
                  <td>kg</td>
                  <td><span className="text-red-600 bg-red-100 px-2 py-1 rounded">Acil</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">08.00</td>
                  <td>8mm Renkli Yem</td>
                  <td>3500</td>
                  <td>kg</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Normal</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Stock;
