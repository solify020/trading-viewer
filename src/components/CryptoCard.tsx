
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import TradingViewWidget from './TradingViewWidget';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: number;
  logoColor: string;
  className?: string;
}

const CryptoCard = ({ name, symbol, price, change, logoColor, className = '' }: CryptoCardProps) => {
  const [interval, setInterval] = useState('1D');
  
  const tradingViewSymbol = `BINANCE:${symbol}USDT`;

  return (
    <Card className={`overflow-hidden border-gray-800 bg-card/80 backdrop-blur-sm ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <div className={`h-6 w-6 rounded-full bg-${logoColor} flex items-center justify-center`}>
            <span className="text-xs text-white font-bold">{symbol.charAt(0)}</span>
          </div>
          <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-lg font-bold">{price}</p>
            <div className={`flex items-center text-xs ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {change >= 0 ? <ArrowUpIcon className="h-3 w-3 mr-1" /> : <ArrowDownIcon className="h-3 w-3 mr-1" />}
              <span>{Math.abs(change).toFixed(2)}%</span>
            </div>
          </div>
          <Select value={interval} onValueChange={setInterval}>
            <SelectTrigger className="w-20 h-8 text-xs">
              <SelectValue placeholder="Interval" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1m</SelectItem>
              <SelectItem value="5">5m</SelectItem>
              <SelectItem value="15">15m</SelectItem>
              <SelectItem value="60">1h</SelectItem>
              <SelectItem value="240">4h</SelectItem>
              <SelectItem value="1D">1d</SelectItem>
              <SelectItem value="1W">1w</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-[300px] w-full">
          <TradingViewWidget symbol={tradingViewSymbol} interval={interval} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;
