
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface NewOrderProps {
  onOrderCreate?: (order: any) => void;
}

export const NewOrder = ({ onOrderCreate }: NewOrderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [packaging, setPackaging] = useState("kova");
  const [quantity, setQuantity] = useState(0);

  const calculateTotalWeight = (packaging: string, quantity: number) => {
    const weights = {
      sb: 1000,
      bb: 750,
      kova: 10,
      cuval: 25,
      kg: 1
    };
    return (weights[packaging as keyof typeof weights] || 0) * quantity;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const totalWeight = calculateTotalWeight(packaging, quantity);

    const orderNumber = `SP${Date.now()}`;
    const newOrder = {
      order_number: orderNumber,
      customer_name: String(formData.get("customer")),
      shipping_region: String(formData.get("region")),
      product: String(formData.get("product")),
      packaging: packaging,
      quantity: quantity,
      total_weight: totalWeight,
      facility: String(formData.get("facility")),
      notes: formData.get("notes") ? String(formData.get("notes")) : null,
      created_by: "Aktif Kullanıcı",
      status: "Beklemede"
    };

    try {
      const { error } = await supabase
        .from('orders')
        .insert(newOrder);

      if (error) throw error;

      toast.success("Sipariş başarıyla oluşturuldu");
      onOrderCreate?.(newOrder);
      setIsOpen(false);
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error("Sipariş oluşturulurken bir hata oluştu");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Yeni Sipariş</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Yeni Sipariş Oluştur</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="customer">Müşteri</Label>
              <Input 
                id="customer" 
                name="customer" 
                list="customers" 
                placeholder="Müşteri adı girin veya seçin"
                required 
              />
              <datalist id="customers">
                <option value="A Firması" />
                <option value="B Firması" />
                <option value="C Firması" />
              </datalist>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="region">Sevk Bölgesi</Label>
              <Input 
                id="region" 
                name="region" 
                list="regions" 
                placeholder="Sevk bölgesi girin veya seçin"
                required 
              />
              <datalist id="regions">
                <option value="Mudurnu / Bolu" />
                <option value="Akyazı / Sakarya" />
                <option value="Düzce Merkez" />
              </datalist>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="product">Ürün</Label>
              <Input 
                id="product" 
                name="product" 
                list="products" 
                placeholder="Ürün girin veya seçin"
                required 
              />
              <datalist id="products">
                <option value="03.05 Granül Yem" />
                <option value="2mm Alabalık Yemi" />
                <option value="8mm Renkli Yem" />
              </datalist>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="packaging">Ambalaj</Label>
                <Select name="packaging" value={packaging} onValueChange={setPackaging}>
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
                  min="0"
                  required
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Toplam Ağırlık</Label>
              <div className="p-2 bg-gray-100 rounded">
                {calculateTotalWeight(packaging, quantity)} kg
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="facility">Tesis</Label>
              <Select name="facility" defaultValue="kara">
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
              <Textarea id="notes" name="notes" placeholder="Sipariş notları..." />
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Oluşturan: Aktif Kullanıcı
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              İptal
            </Button>
            <Button type="submit">Sipariş Oluştur</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
