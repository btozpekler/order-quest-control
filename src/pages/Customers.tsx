
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Users, UserPlus, Building } from "lucide-react";

const Customers = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Müşteriler</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Toplam Müşteri</h3>
                <p className="text-3xl font-bold mt-2">248</p>
              </div>
              <Users className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Yeni Müşteriler</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>
              <UserPlus className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Aktif Firmalar</h3>
                <p className="text-3xl font-bold mt-2">156</p>
              </div>
              <Building className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-6">Müşteri Listesi</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Firma Adı</th>
                  <th className="text-left py-4">İletişim</th>
                  <th className="text-left py-4">Adres</th>
                  <th className="text-left py-4">Son Sipariş</th>
                  <th className="text-left py-4">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">A Firması</td>
                  <td>0532 123 45 67</td>
                  <td>Mudurnu / Bolu</td>
                  <td>01.01.2024</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Aktif</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">B Firması</td>
                  <td>0532 234 56 78</td>
                  <td>Akyazı / Sakarya</td>
                  <td>01.01.2024</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Aktif</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
