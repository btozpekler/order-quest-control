
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, AlertCircle, Share2, MessageSquare } from "lucide-react";
import { NewOrder } from "@/components/NewOrder";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface Order {
  id: string;
  customerName: string;
  shippingRegion: string;
  product: string;
  packaging: string;
  quantity: number;
  totalWeight: number;
  facility: "kara" | "baraj";
  notes: string;
  createdBy: string;
  status: string;
  createdAt: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "SP2024001",
      customerName: "A Firması",
      shippingRegion: "Mudurnu / Bolu",
      product: "03.05 Granül Yem",
      packaging: "kova",
      quantity: 20,
      totalWeight: 200,
      facility: "kara",
      notes: "Acil teslimat",
      createdBy: "Ahmet Yılmaz",
      status: "Hazır",
      createdAt: "2024-03-15"
    }
  ]);

  const handleShare = (orderId: string) => {
    toast({
      title: "Sipariş paylaşıldı",
      description: `${orderId} numaralı sipariş paylaşıldı.`
    });
  };

  const handleWhatsAppShare = (order: Order) => {
    const message = `Sipariş Detayları:\nSipariş No: ${order.id}\nMüşteri: ${order.customerName}\nÜrün: ${order.product}\nMiktar: ${order.quantity} ${order.packaging}\nToplam: ${order.totalWeight} kg\nTesis: ${order.facility === 'kara' ? 'Kara Tesisi' : 'Baraj Tesisi'}\nNotlar: ${order.notes}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Siparişler</h1>
          <NewOrder onOrderCreate={(newOrder) => setOrders([...orders, newOrder])} />
        </div>
        
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
                  <th className="text-left py-4">Tesis</th>
                  <th className="text-left py-4">Sevk Bölgesi</th>
                  <th className="text-left py-4">Durum</th>
                  <th className="text-left py-4">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b">
                    <td className="py-4">{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity} {order.packaging} ({order.totalWeight} kg)</td>
                    <td>{order.facility === 'kara' ? 'Kara Tesisi' : 'Baraj Tesisi'}</td>
                    <td>{order.shippingRegion}</td>
                    <td>
                      <span className="text-green-600 bg-green-100 px-2 py-1 rounded">
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleShare(order.id)}
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleWhatsAppShare(order)}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Orders;
