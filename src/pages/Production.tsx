
import { DashboardLayout } from "@/components/DashboardLayout";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductionEntry } from "@/components/ProductionEntry";
import { toast } from "sonner";
import { ProductionStats } from "@/components/production/ProductionStats";
import { ProductionList } from "@/components/production/ProductionList";

const Production = () => {
  const queryClient = useQueryClient();
  
  const { data: productions = [], isLoading } = useQuery({
    queryKey: ['productions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('production')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching productions:', error);
        throw error;
      }

      return data || [];
    },
  });

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('production')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success("Üretim kaydı silindi");
      queryClient.invalidateQueries({ queryKey: ['productions'] });
    } catch (error) {
      console.error('Error deleting production:', error);
      toast.error("Silme işlemi başarısız oldu");
    }
  };

  const activeProductions = productions.filter(p => p.status === 'Üretimde');
  const completedProductions = productions.filter(p => p.status === 'Tamamlandı');
  const dailyProduction = productions
    .filter(p => {
      const today = new Date();
      const productionDate = new Date(p.created_at);
      return (
        productionDate.getDate() === today.getDate() &&
        productionDate.getMonth() === today.getMonth() &&
        productionDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((acc, curr) => acc + Number(curr.quantity), 0);

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Üretim</h1>
          <ProductionEntry />
        </div>
        
        <ProductionStats
          dailyProduction={dailyProduction}
          activeProductionsCount={activeProductions.length}
          completedProductionsCount={completedProductions.length}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductionList
            title="Aktif Üretimler"
            productions={activeProductions}
            onDelete={handleDelete}
            type="active"
          />
          
          <ProductionList
            title="Tamamlanan Üretimler"
            productions={completedProductions.slice(0, 5)}
            onDelete={handleDelete}
            type="completed"
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Production;
