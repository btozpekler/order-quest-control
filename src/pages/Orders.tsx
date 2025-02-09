
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Truck, AlertCircle, Share2, MessageSquare, Edit, Trash } from "lucide-react";
import { NewOrder } from "@/components/NewOrder";
import { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  shipping_region: string;
  product: string;
  packaging: string;
  quantity: number;
  total_weight: number;
  facility: "kara" | "baraj";
  notes: string;
  created_by: string;
  status: string;
  created_at: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
    const subscription = supabase
      .channel('orders_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, (payload) => {
        console.log('Change received!', payload);
        fetchOrders();
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Hata",
        description: "Siparişler yüklenirken bir hata oluştu.",
        variant: "destructive"
      });
    } else {
      setOrders(data || []);
    }
  };

  const handleEdit = (order: Order) => {
    setEditingOrder(order);
    setIsEditDialogOpen(true);
  };

  const handleShare = (orderId: string) => {
    toast({
      title: "Sipariş paylaşıldı",
      description: `${orderId} numaralı sipariş paylaşıldı.`
    });
  };

  const handleWhatsAppShare = (order: Order) => {
    const message = `Sipariş Detayları:\nSipariş No: ${order.order_number}\nMüşteri: ${order.customer_name}\nÜrün: ${order.product}\nMiktar: ${order.quantity} ${order.packaging}\nToplam: ${order.total_weight} kg\nTesis: ${order.facility === 'kara' ? 'Kara Tesisi' : 'Baraj Tesisi'}\nNotlar: ${order.notes}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleUpdateOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingOrder) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const updatedOrder = {
      ...editingOrder,
      customer_name: formData.get("customer"),
      shipping_region: formData.get("region"),
      product: formData.get("product"),
      packaging: formData.get("packaging"),
      quantity: Number(formData.get("quantity")),
      facility: formData.get("facility"),
      notes: formData.get("notes"),
    };

    const { error } = await supabase
      .from('orders')
      .update(updatedOrder)
      .eq('id', editingOrder.id);

    if (error) {
      toast({
        title: "Hata",
        description: "Sipariş güncellenirken bir hata oluştu.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Başarılı",
        description: "Sipariş başarıyla güncellendi."
      });
      setIsEditDialogOpen(false);
      fetchOrders();
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('id', orderId);

    if (error) {
      toast({
        title: "Hata",
        description: "Sipariş silinirken bir hata oluştu.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Başarılı",
        description: "Sipariş başarıyla silindi."
      });
      fetchOrders();
    }
  };

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Siparişler</h1>
          <NewOrder onOrderCreate={fetchOrders} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Aktif Siparişler</h3>
                <p className="text-3xl font-bold mt-2">{orders.length}</p>
              </div>
              <Package className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Sevkiyat Bekleyen</h3>
                <p className="text-3xl font-bold mt-2">
                  {orders.filter(o => o.status === "Hazır").length}
                </p>
              </div>
              <Truck className="w-8 h-8 text-gray-600" />
            </div>
          </Card>
          
          <Card className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">Kritik Siparişler</h3>
                <p className="text-3xl font-bold mt-2 text-yellow-600">
                  {orders.filter(o => o.status === "Kritik").length}
                </p>
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
                    <td className="py-4">{order.order_number}</td>
                    <td>{order.customer_name}</td>
                    <td>{order.product}</td>
                    <td>{order.quantity} {order.packaging} ({order.total_weight} kg)</td>
                    <td>{order.facility === 'kara' ? 'Kara Tesisi' : 'Baraj Tesisi'}</td>
                    <td>{order.shipping_region}</td>
                    <td>
                      <span className={`px-2 py-1 rounded ${
                        order.status === 'Hazır' ? 'bg-green-100 text-green-600' :
                        order.status === 'Kritik' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleEdit(order)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
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
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteOrder(order.id)}
                        >
                          <Trash className="w-4 h-4 text-red-600" />
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

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Sipariş Düzenle</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleUpdateOrder} className="space-y-4">
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="customer">Müşteri</Label>
                <Input 
                  id="customer" 
                  name="customer" 
                  defaultValue={editingOrder?.customer_name}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="region">Sevk Bölgesi</Label>
                <Input 
                  id="region" 
                  name="region" 
                  defaultValue={editingOrder?.shipping_region}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="product">Ürün</Label>
                <Input 
                  id="product" 
                  name="product" 
                  defaultValue={editingOrder?.product}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="packaging">Ambalaj</Label>
                  <Select name="packaging" defaultValue={editingOrder?.packaging}>
                    <SelectTrigger>
                      <SelectValue placeholder="Ambalaj seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sb">SB (1000 kg)</SelectItem>
                      <SelectItem value="bb">BB (750 kg)</SelectItem>
                      <SelectItem value="kova">Kova (10 kg)</SelectItem>
                      <SelectItem value="cuval">Çuval (25 kg)</SelectItem>
                      <SelectItem value="kg">KG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="quantity">Miktar</Label>
                  <Input 
                    id="quantity" 
                    name="quantity" 
                    type="number" 
                    defaultValue={editingOrder?.quantity}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="facility">Tesis</Label>
                <Select name="facility" defaultValue={editingOrder?.facility}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tesis seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kara">Kara Tesisi</SelectItem>
                    <SelectItem value="baraj">Baraj Tesisi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="notes">Notlar</Label>
                <Input 
                  id="notes" 
                  name="notes" 
                  defaultValue={editingOrder?.notes || ""}
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                İptal
              </Button>
              <Button type="submit">Güncelle</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default Orders;
