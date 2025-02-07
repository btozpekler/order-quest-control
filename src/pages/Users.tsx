
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { UserCog, Shield, Users } from "lucide-react";

const Users = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Kullanıcı Yönetimi</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Toplam Kullanıcı</h3>
                <p className="text-3xl font-bold mt-2">24</p>
              </div>
              <Users className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Sistem Yöneticileri</h3>
                <p className="text-3xl font-bold mt-2">4</p>
              </div>
              <UserCog className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Aktif Oturumlar</h3>
                <p className="text-3xl font-bold mt-2">12</p>
              </div>
              <Shield className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
        </div>

        <Card className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-6">Kullanıcı Listesi</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4">Ad Soyad</th>
                  <th className="text-left py-4">E-posta</th>
                  <th className="text-left py-4">Rol</th>
                  <th className="text-left py-4">Son Giriş</th>
                  <th className="text-left py-4">Durum</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">Ahmet Yılmaz</td>
                  <td>ahmet@firma.com</td>
                  <td>Süper Admin</td>
                  <td>01.01.2024 09:45</td>
                  <td><span className="text-green-600 bg-green-100 px-2 py-1 rounded">Aktif</span></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Mehmet Demir</td>
                  <td>mehmet@firma.com</td>
                  <td>Üretim Müdürü</td>
                  <td>01.01.2024 10:15</td>
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

export default Users;
