
import { useState, useEffect } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import CryptoCard from '@/components/CryptoCard';
import MarketOverview from '@/components/MarketOverview';
import { useToast } from '@/components/ui/use-toast';
import { RefreshCcwIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Simulated crypto data (in a real app, this would come from an API)
  const cryptoData = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$64,287.53',
      change: 2.34,
      logoColor: 'crypto-bitcoin'
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$3,428.91',
      change: -0.72,
      logoColor: 'crypto-ethereum'
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$144.85',
      change: 5.21,
      logoColor: 'crypto-solana'
    }
  ];

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLastUpdated(new Date());
      toast({
        title: "Data refreshed",
        description: "Latest market data has been loaded.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DashboardHeader />
      
      <div className="container py-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Crypto Market</h1>
          <div className="flex items-center gap-3">
            <p className="text-xs text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleRefresh}
              disabled={loading}
              className="h-8"
            >
              <RefreshCcwIcon className={`h-3.5 w-3.5 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          {cryptoData.map((crypto) => (
            <div key={crypto.symbol} className={`${loading ? 'animate-pulse-slow' : ''}`}>
              <CryptoCard {...crypto} />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MarketOverview />
          <div className="col-span-1 md:col-span-1 lg:col-span-3 border border-gray-800 bg-card/80 backdrop-blur-sm rounded-lg p-4">
            <h2 className="font-medium mb-2">Coming Soon</h2>
            <p className="text-sm text-muted-foreground">
              Portfolio tracking, alerts, and advanced analytics will be available in the next update.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="border-t border-gray-800 py-4">
        <div className="container text-center text-xs text-muted-foreground">
          Crypto Dashboard - Market data is for demonstration purposes only
        </div>
      </footer>
    </div>
  );
};

export default Index;
