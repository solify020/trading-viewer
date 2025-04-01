
import React, { useEffect, useRef, memo } from 'react';

interface TradingViewWidgetProps {
  symbol: string;
  theme?: string;
  interval?: string;
  className?: string;
}

const TradingViewWidget = ({
  symbol,
  theme = 'dark',
  interval = '1D',
  className = ''
}: TradingViewWidgetProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        if (typeof TradingView !== 'undefined' && container.current) {
          new TradingView.widget({
            autosize: true,
            symbol: symbol,
            interval: interval,
            timezone: 'Etc/UTC',
            theme: theme,
            style: '1',
            locale: 'en',
            enable_publishing: false,
            allow_symbol_change: false,
            container_id: container.current.id,
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            studies: ['Volume@tv-basicstudies'],
            toolbar_bg: '#131722',
            withdateranges: true,
          });
        }
      };
      container.current.appendChild(script);
      return () => {
        if (container.current && script.parentNode) {
          container.current.removeChild(script);
        }
      };
    }
  }, [symbol, theme, interval]);

  return (
    <div className={`tradingview-widget-container ${className}`}>
      <div id={`tradingview_${symbol.replace(':', '_')}`} ref={container} className="h-full w-full" />
    </div>
  );
};

export default memo(TradingViewWidget);
