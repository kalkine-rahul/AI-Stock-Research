import { marketIndices, topStocks } from '../mockData';
import StockChart from '@/components/StockChart';
import AIChat from '@/components/AIChat';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f8f9fb] pt-32 lg:pt-36">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Main Section */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Market Quick View */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {marketIndices.map((idx) => (
                <div key={idx.name} className="bg-white border border-gray-100 p-5 rounded-2xl hover:shadow-lg transition-all cursor-pointer group">
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider mb-1 group-hover:text-[#00D09C]">{idx.name}</p>
                  <p className="text-xl font-black text-gray-900">{idx.price}</p>
                  <div className={`flex items-center gap-1 text-xs font-bold mt-2 ${idx.isUp ? 'text-[#00D09C]' : 'text-[#EB5757]'}`}>
                    <span>{idx.change}</span>
                    <span>{idx.percent}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-black text-gray-900 tracking-tight">RELIANCE INDUSTRIES</h2>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', '1Y'].map(t => (
                    <button key={t} className="px-3 py-1 text-[10px] font-bold border border-gray-100 rounded-md hover:bg-gray-50 uppercase">{t}</button>
                  ))}
                </div>
              </div>
              <StockChart />
            </div>
          </div>

          {/* Right Column (AI & News) */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <AIChat />
            
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-4 border-b border-gray-50 pb-2">Top Gainers / Losers</h3>
              <div className="space-y-4">
                {topStocks.map(stock => (
                  <div key={stock.symbol} className="flex justify-between items-center group cursor-pointer">
                    <div>
                      <p className="font-bold text-gray-800 text-sm group-hover:text-[#00D09C]">{stock.symbol}</p>
                      <p className="text-[10px] text-gray-400">NSE India</p>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${stock.change.startsWith('+') ? 'bg-green-50 text-[#00D09C]' : 'bg-red-50 text-[#EB5757]'}`}>
                      {stock.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}