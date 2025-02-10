
import { Card } from "@/components/ui/card";
import { Factory, AlertCircle, CheckCircle2 } from "lucide-react";

interface ProductionStatsProps {
  dailyProduction: number;
  activeProductionsCount: number;
  completedProductionsCount: number;
}

export const ProductionStats = ({
  dailyProduction,
  activeProductionsCount,
  completedProductionsCount,
}: ProductionStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Günlük Üretim</h3>
            <p className="text-3xl font-bold mt-2">{dailyProduction} kg</p>
          </div>
          <Factory className="w-8 h-8 text-gray-600" />
        </div>
      </Card>
      
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Aktif Üretim Emirleri</h3>
            <p className="text-3xl font-bold mt-2">{activeProductionsCount}</p>
          </div>
          <AlertCircle className="w-8 h-8 text-gray-600" />
        </div>
      </Card>
      
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">Tamamlanan Üretimler</h3>
            <p className="text-3xl font-bold mt-2">{completedProductionsCount}</p>
          </div>
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
      </Card>
    </div>
  );
};
