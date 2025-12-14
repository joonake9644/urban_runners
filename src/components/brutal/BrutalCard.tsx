import { cn } from '@/lib/utils';

type BrutalCardColor = 'orange' | 'green' | 'blue' | 'red' | 'white' | 'black';

interface BrutalCardProps {
  children: React.ReactNode;
  color?: BrutalCardColor;
  className?: string;
  noPadding?: boolean;
}

const colorClasses: Record<BrutalCardColor, string> = {
  orange: 'bg-brutal-orange text-black',
  green: 'bg-green-500 text-black',
  blue: 'bg-blue-500 text-white',
  red: 'bg-red-500 text-white',
  white: 'bg-white text-black',
  black: 'bg-black text-white',
};

export function BrutalCard({
  children,
  color = 'white',
  className,
  noPadding = false,
}: BrutalCardProps) {
  return (
    <div
      className={cn(
        'brutal-card',
        colorClasses[color],
        !noPadding && 'p-6',
        className
      )}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  color?: 'orange' | 'green' | 'blue' | 'red';
}

export function StatCard({ label, value, color = 'orange' }: StatCardProps) {
  return (
    <BrutalCard color={color} className="flex flex-col gap-2">
      <div className="font-brutal text-sm font-black uppercase">{label}</div>
      <div className="font-brutal text-4xl font-black">{value}</div>
    </BrutalCard>
  );
}
