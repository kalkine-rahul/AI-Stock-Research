"use client";
import { useState } from 'react';
import { Menu, X, ChevronDown, Plus, Minus, Search, Phone, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- DATA ---
const insightsData = {
  "Market Movers": ["Top Gainers", "Top Losers", "52 Week High", "52 Week Low", "EPS Calendar", "Upcoming IPO"],
  "Stock Recommendations": ["Blue-Chip", "Mid-Cap", "Small-Cap"],
  "Indices": ["ASX 20", "ASX 50", "ASX 100", "ASX 200", "ASX 300", "All Ordinaries"]
};

const tickerData = [
  { symbol: "WBCPI", price: "100.32", change: "0.0%", isUp: false },
  { symbol: "BHP", price: "50.13", change: "1.4367%", isUp: true },
  { symbol: "RIO", price: "152.87", change: "1.9269%", isUp: true },
  { symbol: "CBA", price: "153.08", change: "1.0562%", isUp: true },
  { symbol: "NEM", price: "164.75", change: "5.6361%", isUp: true },
  { symbol: "WBC", price: "39.32", change: "1.0277%", isUp: true },
  { symbol: "NAB", price: "43.04", change: "0.1862%", isUp: true },
];

const marqueeStyles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-kalkine-marquee {
    display: flex;
    width: max-content;
    animation: marquee 60s linear infinite;
  }
  .animate-kalkine-marquee:hover {
    animation-play-state: paused;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const reports = {
    "High-Risk High-Reward": ["American Tech Report", "Penny Stocks Report", "AI Report"],
    "Technical Analysis Reports": ["Bullish Chart Report", "Cryptocurrency Report", "Meme Coin Report"],
    "Low-To-Medium Risk": ["Inflation Report", "Dividend Income Report"],
    "Diversified Themes Reports": ["Global Big Money", "Kalkine IPO Report"]
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[500] font-sans">
      <style>{marqueeStyles}</style>

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#001529] text-white text-[11px] py-2 text-center font-medium border-b border-white/10">
        Kalkine has a fully transformed New Avatar. 
        <button className="bg-[#0056b3] px-3 py-0.5 rounded ml-3 hover:bg-blue-600 transition-all text-[10px] uppercase font-bold">
          Switch to Old version
        </button>
      </div>
      
      {/* 2. MAIN HEADER */}
      <header className="bg-white relative z-[120] border-b border-gray-100">
        <nav className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="shrink-0">
              <Image src="https://uat.kalkine.co.in/static/assets/newlayout/images/logo.svg" alt="Kalkine" width={110} height={40} />
            </Link>
            
            <div className="hidden lg:flex gap-8 text-[13px] font-bold text-gray-800 uppercase tracking-tight h-16">
              
              {/* RESEARCH REPORTS DROPDOWN */}
              <div className="relative group h-full flex items-center cursor-pointer hover:text-[#f39200]">
                Research Reports <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />
                <div className="absolute top-[64px] -left-20 w-[800px] bg-[#0a0a0a] text-white p-8 grid grid-cols-4 gap-6 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl border-t-2 border-[#f39200]">
                  {Object.entries(reports).map(([cat, items]) => (
                    <div key={cat}>
                      <h4 className="text-[#f39200] text-[10px] uppercase mb-4 tracking-wider font-black">{cat}</h4>
                      <ul className="space-y-2 text-gray-400 font-medium">
                        {items.map(item => <li key={item} className="hover:text-white text-xs transition-colors">{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* DAILY INSIGHTS DROPDOWN (NEW) */}
              <div className="relative group h-full flex items-center cursor-pointer hover:text-[#f39200]">
                Daily Insights <ChevronDown size={14} className="ml-1 group-hover:rotate-180 transition-transform" />
                <div className="absolute top-[64px] -left-60 w-[850px] bg-[#0a0a0a] text-white p-10 grid grid-cols-3 gap-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl rounded-b-xl border-t-2 border-[#f39200]">
                  {Object.entries(insightsData).map(([cat, items]) => (
                    <div key={cat}>
                      <h4 className="text-[#f39200] text-[11px] mb-5 font-black border-b border-white/10 pb-2 uppercase tracking-widest">{cat}</h4>
                      <ul className="space-y-3">
                        {items.map(subItem => (
                          <li key={subItem} className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <span className="flex items-center hover:text-[#f39200] cursor-pointer h-full">Model Portfolios</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden xl:flex items-center gap-2 text-gray-700 font-bold text-[13px]">
               <Phone size={16} className="text-[#f39200]" /> 1800-272-662
            </div>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <Link href="/login">
              <button className="bg-[#f39200] text-white px-6 py-2 rounded font-black text-[12px] uppercase shadow-md hover:brightness-110 transition-all">
                Login
              </button>
            </Link>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* 3. TICKER SECTION (Now White Background like Image) */}
      <div className="bg-white text-gray-800 py-2 overflow-hidden border-b border-gray-100 shadow-sm">
        <div className="animate-kalkine-marquee">
          {[...tickerData, ...tickerData, ...tickerData].map((stock, i) => (
            <div key={i} className="flex items-center gap-2 mx-8 text-[11px] font-bold whitespace-nowrap border-r border-gray-100 pr-8 last:border-0">
              <span className="text-gray-900 uppercase tracking-wider">{stock.symbol}</span>
              <span className="text-gray-500 font-mono">{stock.price}</span>
              <span className={stock.isUp ? 'text-green-600' : 'text-red-600'}>
                {stock.isUp ? '▲' : '▼'} {stock.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SEARCH DRAWER */}
      <div className={`bg-white transition-all duration-300 ease-in-out overflow-hidden shadow-xl border-b border-gray-100 ${isSearchOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`} >
        <div className="max-w-3xl mx-auto p-4">
          <div className="relative">
            <input 
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 pl-12 outline-none focus:border-[#f39200] text-sm" 
              placeholder="Search stocks, reports, insights..." 
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed inset-y-0 left-0 w-[300px] bg-[#0a0a0a] text-white z-[500] transform transition-transform shadow-2xl ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex justify-between border-b border-white/10 items-center">
          <Image src="https://uat.kalkine.co.in/static/assets/newlayout/images/logo.svg" alt="Kalkine" width={80} height={30} className="brightness-200" />
          <X onClick={() => setIsMenuOpen(false)} className="cursor-pointer" />
        </div>
        <div className="overflow-y-auto h-full pb-20">
          {Object.entries(insightsData).map(([cat, items]) => (
            <div key={cat} className="border-b border-white/5">
              <div className="p-5 flex justify-between text-xs font-black uppercase tracking-widest text-[#f39200]" onClick={() => setActiveAccordion(activeAccordion === cat ? null : cat)}>
                {cat} {activeAccordion === cat ? <Minus size={14}/> : <Plus size={14}/>}
              </div>
              {activeAccordion === cat && (
                <ul className="bg-white/5 px-8 py-2">
                  {items.map(item => <li key={item} className="py-3 text-xs text-gray-400 border-b border-white/5 last:border-0">{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}