
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

export const NewOrder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the order submission
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Yeni Sipariş</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Yeni Sipariş Oluştur</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="customer">Müşteri</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Müşteri seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a-firma">A Firması</SelectItem>
                  <SelectItem value="b-firma">B Firması</SelectItem>
                  <SelectItem value="c-firma">C Firması</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="product">Ürün</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Ürün seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="03.05">03.05 Granül Yem</SelectItem>
                  <SelectItem value="02.00">2mm Alabalık Yemi</SelectItem>
                  <SelectItem value="08.00">8mm Renkli Yem</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="quantity">Miktar</Label>
              <Input id="quantity" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="unit">Birim</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Birim seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kova">Kova</SelectItem>
                  <SelectItem value="cuval">Çuval</SelectItem>
                  <SelectItem value="bb">BB</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="deliveryAddress">Teslimat Adresi</Label>
              <Input id="deliveryAddress" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="orderDate">Sipariş Tarihi</Label>
              <Input id="orderDate" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="deliveryDate">Teslimat Tarihi</Label>
              <Input id="deliveryDate" type="date" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Notlar</Label>
              <Input id="notes" type="text" />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              İptal
            </Button>
            <Button type="submit">Kaydet</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
