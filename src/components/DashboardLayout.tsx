
import { useState } from "react";
import { Menu, Bell, ChevronDown, Boxes, Package, TrendingUp, ClipboardList, BarChart, Factory, Users, UserCog, Truck, Settings as SettingsIcon } from "lucide-react";
import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [notifications] = useState(3);

  const menuItems = [
    { icon: Boxes, label: "Stok Yönetimi", href: "/stock" },
    { icon: Package, label: "Siparişler", href: "/orders" },
    { icon: Factory, label: "Üretim", href: "/production" },
    { icon: ClipboardList, label: "Üretim Planlama", href: "/production-planning" },
    { icon: Truck, label: "Sevkiyat", href: "/shipping" },
    { icon: BarChart, label: "Raporlar", href: "/reports" },
    { icon: Users, label: "Müşteriler", href: "/customers" },
    { icon: UserCog, label: "Kullanıcı Yönetimi", href: "/users" },
    { icon: SettingsIcon, label: "Ayarlar", href: "/settings" },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent>
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">Yem Üretim Takip</h2>
            </div>
            <div className="px-3">
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start mb-1"
                  asChild
                >
                  <a href={item.href} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </SidebarContent>
        </Sidebar>
        
        <main className="flex-1 min-h-screen">
          <header className="glass-card h-16 px-6 flex items-center justify-between fixed top-0 right-0 left-0 z-50">
            <div className="flex items-center gap-4">
              <SidebarTrigger>
                <Menu className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              </SidebarTrigger>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                {notifications > 0 && (
                  <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-gray-200" />
                <span className="text-sm font-medium">Admin</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </header>
          
          <div className="pt-20 px-6 pb-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
