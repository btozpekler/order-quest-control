
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Package, TrendingUp, Truck, Users } from "lucide-react";

const StatCard = ({ 
  icon: Icon, 
  title, 
  value, 
  trend 
}: { 
  icon: any, 
  title: string, 
  value: string, 
  trend: string 
}) => (
  <Card className="glass-card p-6 hover-scale">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h3 className="text-2xl font-semibold mt-2">{value}</h3>
        <p className="text-sm text-green-600 mt-2">{trend}</p>
      </div>
      <Icon className="w-6 h-6 text-gray-600" />
    </div>
  </Card>
);

const Index = () => {
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <h1 className="text-3xl font-semibold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Package}
            title="Total Production"
            value="1,234 tons"
            trend="+12.5% from last month"
          />
          <StatCard
            icon={Users}
            title="Active Orders"
            value="48"
            trend="+8% from last week"
          />
          <StatCard
            icon={Truck}
            title="Pending Deliveries"
            value="15"
            trend="3 urgent deliveries"
          />
          <StatCard
            icon={TrendingUp}
            title="Revenue"
            value="₺845,000"
            trend="+15.3% from last month"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {/* Order items will go here */}
              <p className="text-gray-600">Loading recent orders...</p>
            </div>
          </Card>

          <Card className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Production Schedule</h2>
            <div className="space-y-4">
              {/* Schedule items will go here */}
              <p className="text-gray-600">Loading production schedule...</p>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
