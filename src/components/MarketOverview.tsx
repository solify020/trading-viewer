
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, BarChart3Icon, ActivityIcon } from 'lucide-react';

interface MarketMetric {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

const MarketOverview = () => {
  const metrics: MarketMetric[] = [
    {
      label: 'Global Market Cap',
      value: '$2.48T',
      change: 1.28,
      icon: <BarChart3Icon className="h-4 w-4 text-gray-400" />,
    },
    {
      label: 'Total Volume (24h)',
      value: '$83.4B',
      change: -2.53,
      icon: <ActivityIcon className="h-4 w-4 text-gray-400" />,
    },
    {
      label: 'BTC Dominance',
      value: '51.2%',
      change: 0.74,
      icon: <TrendingUpIcon className="h-4 w-4 text-gray-400" />,
    },
  ];

  return (
    <Card className="border-gray-800 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-md font-medium">Market Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {metric.icon}
              <span className="text-sm text-muted-foreground">{metric.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">{metric.value}</span>
              <div className={`flex items-center text-xs ${metric.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {metric.change >= 0 ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
                <span>{Math.abs(metric.change).toFixed(2)}%</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MarketOverview;
