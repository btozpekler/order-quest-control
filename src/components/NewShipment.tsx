
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

export const NewShipment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the shipment submission
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>Yeni Sevkiyat</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Yeni Sevkiyat Oluştur</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="order">Sipariş</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sipariş seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="order1">Sipariş #001</SelectItem>
                  <SelectItem value="order2">Sipariş #002</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vehicle">Araç</Label>
              <Input id="vehicle" type="text" placeholder="Araç plakası" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="driver">Şoför</Label>
              <Input id="driver" type="text" placeholder="Şoför adı" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="shipmentDate">Sevkiyat Tarihi</Label>
              <Input id="shipmentDate" type="date" />
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
