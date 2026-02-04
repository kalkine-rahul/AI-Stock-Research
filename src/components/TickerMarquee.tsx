const tickerData = [
    { symbol: "WBCPI", price: "100.32", change: "0.0%", isUp: false },
    { symbol: "BHP", price: "50.13", change: "1.4367%", isUp: true },
    { symbol: "RIO", price: "152.87", change: "1.9269%", isUp: true },
    { symbol: "CBA", price: "153.08", change: "1.0562%", isUp: true },
    { symbol: "NEM", price: "164.75", change: "5.6361%", isUp: true },
    { symbol: "WBC", price: "39.32", change: "1.0277%", isUp: true },
    { symbol: "NAB", price: "43.04", change: "0.1862%", isUp: true },
  ];
  
  export function TickerMarquee() {
    return (
      <div className="bg-[#131722] text-white py-2 border-b border-white/5 overflow-hidden whitespace-nowrap flex group">
        {/* Hum do containers use karte hain seamless infinite loop ke liye */}
        <div className="flex animate-marquee min-w-full">
          {tickerData.map((stock, i) => (
            <TickerItem key={i} stock={stock} />
          ))}
        </div>
        {/* Duplicate Content */}
        <div className="flex animate-marquee min-w-full" aria-hidden="true">
          {tickerData.map((stock, i) => (
            <TickerItem key={`dup-${i}`} stock={stock} />
          ))}
        </div>
      </div>
    );
  }
  
  function TickerItem({ stock }: { stock: any }) {
    return (
      <div className="flex items-center gap-2 mx-6 text-[11px] font-bold tracking-tight">
        <span className="text-gray-400 hover:text-white cursor-pointer transition-colors">
          {stock.symbol}
        </span>
        <span className="text-white">{stock.price}</span>
        <span className={`flex items-center gap-0.5 ${stock.isUp ? 'text-green-400' : 'text-red-400'}`}>
          {stock.isUp ? '▲' : '▼'} {stock.change}
        </span>
      </div>
    );
  }