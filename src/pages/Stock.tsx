
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Plus, ClipboardList, Factory, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { StockCount } from "@/components/StockCount";
import { ProductionEntry } from "@/components/ProductionEntry";

const Stock = () => {
  const { toast } = useToast();

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Stok Yönetimi</h1>
          <div className="flex gap-4">
            <StockCount />
            <ProductionEntry />
          </div>
        </div>
        
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
                <h3 className="text-lg font-semibold">Günlük Sayımlar</h3>
                <p className="text-3xl font-bold mt-2">3 sayım</p>
              </div>
              <ClipboardList className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Son Sayımlar</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Tarih</th>
                    <th className="text-left py-4">Sayım No</th>
                    <th className="text-left py-4">Personel</th>
                    <th className="text-left py-4">Durum</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">02.01.2024</td>
                    <td>S24001</td>
                    <td>Ahmet Yılmaz</td>
                    <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Tamamlandı</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">01.01.2024</td>
                    <td>S24002</td>
                    <td>Mehmet Demir</td>
                    <td><span className="text-blue-600 bg-blue-100 px-2 py-1 rounded">Devam Ediyor</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-6">Son Üretimler</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Tarih</th>
                    <th className="text-left py-4">Ürün</th>
                    <th className="text-left py-4">Miktar</th>
                    <th className="text-left py-4">Lot No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4">02.01.2024</td>
                    <td>03.05 Granül Yem</td>
                    <td>1,500 kg</td>
                    <td>L24001</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4">01.01.2024</td>
                    <td>2mm Alabalık Yemi</td>
                    <td>2,000 kg</td>
                    <td>L24002</td>
                  </tr>
                </tbody>
              </table>
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
                  <th className="text-left py-4">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">03.05</td>
                  <td>Granül Yem</td>
                  <td>250</td>
                  <td>kg</td>
                  <td><span className="text-yellow-600 bg-yellow-100 px-2 py-1 rounded">Kritik</span></td>
                  <td>
                    <Button variant="ghost" size="sm">Düzenle</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">02.00</td>
                  <td>2mm Alabalık Yemi</td>
                  <td>100</td>
                  <td>kg</td>
                  <td><span className="text-red-600 bg-red-100 px-2 py-1 rounded">Acil</span></td>
                  <td>
                    <Button variant="ghost" size="sm">Düzenle</Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">08.00</td>
                  <td>8mm Renkli Yem</td>
                  <td>3500</td>
                  <td>kg</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Normal</span></td>
                  <td>
                    <Button variant="ghost" size="sm">Düzenle</Button>
                  </td>
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
