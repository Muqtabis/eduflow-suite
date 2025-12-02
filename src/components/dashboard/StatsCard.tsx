import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'destructive';
}

const StatsCard = ({ title, value, icon: Icon, trend, trendUp, variant = 'default' }: StatsCardProps) => {
  const iconBgColors = {
    default: 'bg-primary/10 text-primary',
    success: 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]',
    warning: 'bg-[hsl(var(--warning))]/10 text-[hsl(var(--warning))]',
    destructive: 'bg-destructive/10 text-destructive',
  };

  return (
    <Card className="border-border shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-3xl font-bold text-foreground mt-1">{value}</p>
            {trend && (
              <p className={cn(
                "text-sm mt-1 font-medium",
                trendUp ? "text-[hsl(var(--success))]" : "text-destructive"
              )}>
                {trend}
              </p>
            )}
          </div>
          <div className={cn("p-3 rounded-xl", iconBgColors[variant])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
