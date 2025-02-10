
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
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

interface Production {
  id: string;
  batch_number: string;
  product_type: string;
  quantity: number;
  notes?: string | null;
  status?: string;
  created_at?: string;
  completed_at?: string | null;
}

interface ProductionEntryProps {
  isEditing?: boolean;
  production?: Production;
  onClose?: () => void;
}

export const ProductionEntry = ({ isEditing, production, onClose }: ProductionEntryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    
    const newProduction = {
      product_type: String(formData.get("product")),
      quantity: Number(formData.get("quantity")),
      batch_number: String(formData.get("lotNumber")),
      notes: formData.get("notes") ? String(formData.get("notes")) : null,
      status: "Üretimde"
    };

    try {
      if (isEditing && production) {
        const { error } = await supabase
          .from('production')
          .update(newProduction)
          .eq('id', production.id);

        if (error) throw error;
        toast.success("Üretim kaydı güncellendi");
      } else {
        const { error } = await supabase
          .from('production')
          .insert([newProduction]);

        if (error) throw error;
        toast.success("Yeni üretim kaydı oluşturuldu");
      }

      queryClient.invalidateQueries({ queryKey: ['productions'] });
      setIsOpen(false);
      if (onClose) onClose();
    } catch (error) {
      console.error('Error saving production:', error);
      toast.error("Bir hata oluştu");
    }
  };

  const handleCompleteProduction = async () => {
    if (!production) return;

    try {
      const { error } = await supabase
        .from('production')
        .update({
          status: "Tamamlandı",
          completed_at: new Date().toISOString()
        })
        .eq('id', production.id);

      if (error) throw error;

      toast.success("Üretim tamamlandı olarak işaretlendi");
      queryClient.invalidateQueries({ queryKey: ['productions'] });
      if (onClose) onClose();
    } catch (error) {
      console.error('Error completing production:', error);
      toast.error("Bir hata oluştu");
    }
  };

  const DialogTriggerButton = isEditing ? (
    <Button variant="ghost" size="sm" onClick={() => setIsOpen(true)}>
      Düzenle
    </Button>
  ) : (
    <Button onClick={() => setIsOpen(true)}>Yeni Üretim</Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {DialogTriggerButton}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Üretim Düzenle" : "Yeni Üretim"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="product">Ürün</Label>
              <Select name="product" defaultValue={production?.product_type}>
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
              <Label htmlFor="quantity">Üretim Miktarı</Label>
              <Input 
                id="quantity" 
                name="quantity" 
                type="number" 
                defaultValue={production?.quantity}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lotNumber">Lot Numarası</Label>
              <Input 
                id="lotNumber" 
                name="lotNumber" 
                type="text" 
                defaultValue={production?.batch_number}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="notes">Notlar</Label>
              <Input 
                id="notes" 
                name="notes" 
                type="text" 
                defaultValue={production?.notes || ""}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
              İptal
            </Button>
            {isEditing && production?.status === "Üretimde" && (
              <Button 
                type="button" 
                variant="secondary"
                onClick={handleCompleteProduction}
              >
                Üretimi Tamamla
              </Button>
            )}
            <Button type="submit">
              {isEditing ? "Güncelle" : "Kaydet"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
