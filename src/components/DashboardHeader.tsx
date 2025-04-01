
import { Search, Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const DashboardHeader = () => {
  return (
    <header className="border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-crypto-bitcoin via-crypto-ethereum to-crypto-solana h-6 w-6 rounded"></div>
            <span className="font-bold hidden md:inline-block">Crypto Dashboard</span>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search coins..."
                className="w-full md:w-[200px] pl-8 bg-background/50"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
