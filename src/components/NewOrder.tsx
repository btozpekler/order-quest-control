
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

interface NewOrderProps {
  onOrderCreate: (order: any) => void;
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const totalWeight = calculateTotalWeight(packaging, quantity);

    const newOrder = {
      id: `SP${Date.now()}`,
      customerName: formData.get("customer"),
      shippingRegion: formData.get("region"),
      product: formData.get("product"),
      packaging: packaging,
      quantity: quantity,
      totalWeight: totalWeight,
      facility: formData.get("facility"),
      notes: formData.get("notes"),
      createdBy: "Aktif Kullanıcı", // This would come from auth context in a real app
      status: "Yeni",
      createdAt: new Date().toISOString()
    };

    onOrderCreate(newOrder);
    setIsOpen(false);
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
                <Select name="packaging" onValueChange={setPackaging}>
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
              <Select name="facility">
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
