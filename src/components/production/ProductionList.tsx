
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { ProductionEntry } from "@/components/ProductionEntry";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

interface ProductionListProps {
  title: string;
  productions: Production[];
  onDelete: (id: string) => Promise<void>;
  type: "active" | "completed";
}

export const ProductionList = ({ title, productions, onDelete, type }: ProductionListProps) => {
  return (
    <Card className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="space-y-4">
        {productions.map((production) => (
          <div 
            key={production.id} 
            className={`flex items-center justify-between p-4 ${
              type === "active" ? "bg-blue-50" : "border"
            } rounded-lg`}
          >
            <div>
              <h3 className="font-medium">{production.product_type}</h3>
              <p className="text-sm text-gray-600">Lot: #{production.batch_number}</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right mr-4">
                <p className="font-medium">{production.quantity} kg</p>
                <p className={`text-sm ${
                  type === "active" ? "text-blue-600" : "text-green-600"
                }`}>
                  {type === "active" ? "Üretimde" : "Tamamlandı"}
                </p>
              </div>
              {type === "active" && (
                <ProductionEntry 
                  isEditing 
                  production={production}
                />
              )}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Üretimi Sil</AlertDialogTitle>
                    <AlertDialogDescription>
                      Bu üretim kaydını silmek istediğinizden emin misiniz?
                      Bu işlem geri alınamaz.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>İptal</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => onDelete(production.id)}
                    >
                      Sil
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        {productions.length === 0 && (
          <p className="text-gray-500 text-center py-4">
            {type === "active" ? "Aktif üretim bulunmuyor" : "Tamamlanan üretim bulunmuyor"}
          </p>
        )}
      </div>
    </Card>
  );
};
