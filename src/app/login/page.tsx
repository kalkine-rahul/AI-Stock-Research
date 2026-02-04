"use client";
import React from 'react';
import { Mail, Github, Chrome, X, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="fixed inset-0 z-[500] flex bg-[#fcfcfc] overflow-hidden font-sans">
      
      {/* --- LEFT SIDE: THE TEXTUAL BRANDING & FEATURES --- */}
      <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-center p-20 bg-white">
        {/* Modern Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[10%] left-[-10%] w-72 h-72 bg-emerald-100/50 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] right-[0%] w-80 h-80 bg-purple-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 space-y-12">
          <div className="space-y-6">
            <h1 className="text-7xl font-black text-zinc-900 tracking-tighter leading-none">
              Smart <br /> 
              <span className="text-emerald-500">Research.</span>
            </h1>
            <p className="text-xl text-zinc-500 font-medium max-w-sm leading-relaxed">
              Experience the next generation of AI-driven stock analysis and real-time market insights.
            </p>
          </div>

          {/* Value Props - No images, just Icons */}
          <div className="space-y-8 pt-4">
            {[
              { icon: <Zap className="text-emerald-500" />, title: "Instant AI Analysis", desc: "Real-time processing of complex market data." },
              { icon: <BarChart3 className="text-purple-500" />, title: "Model Portfolios", desc: "Curated strategies for every risk profile." },
              { icon: <ShieldCheck className="text-blue-500" />, title: "Verified Data", desc: "Institutional grade accuracy for retail investors." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-zinc-50 rounded-2xl border border-zinc-100">{item.icon}</div>
                <div>
                  <h4 className="font-bold text-zinc-800">{item.title}</h4>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-20">
            <div className="text-[10px] font-black text-zinc-300 tracking-[0.4em] uppercase">Built for Professionals</div>
        </div>
      </div>

      {/* --- RIGHT SIDE: THE CLEAN MINIMAL FORM --- */}
      <div className="w-full lg:w-[55%] flex flex-col bg-[#F8F9FA] relative justify-center items-center">
        {/* Floating Close Button */}
        <Link href="/" className="absolute top-10 right-10 text-zinc-400 hover:text-zinc-900 transition-all">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest">
            Close <X size={20} />
          </div>
        </Link>

        <div className="w-full max-w-[460px] px-6">
  <div className="relative group">
    {/* Subtle Background Glow behind the card */}
    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
    
    <div className="relative bg-white border border-zinc-100 p-10 md:p-14 rounded-[40px] shadow-2xl shadow-zinc-200/50">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-zinc-900 tracking-tight mb-3">
          Identity <span className="text-emerald-500">.</span>
        </h2>
        <p className="text-zinc-400 text-sm font-medium leading-relaxed">
          Access your institutional-grade research dashboard.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Modern Minimal Inputs */}
        <div className="space-y-4">
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
            />
          </div>
          
          <div className="relative">
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm font-medium outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
            />
          </div>
        </div>

        <div className="flex justify-end pt-1">
          <button className="text-xs font-bold text-zinc-400 hover:text-emerald-600 transition-colors uppercase tracking-widest">
            Recovery?
          </button>
        </div>

        <button className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-bold text-sm hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-zinc-200 flex items-center justify-center gap-2 group">
          Authorize Account 
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      {/* Alternative Social Options - Minimal Version */}
      <div className="mt-12 pt-8 border-t border-zinc-50">
        <p className="text-[10px] font-black text-zinc-300 uppercase tracking-[0.2em] text-center mb-6">
          Fast Access via
        </p>
        <div className="flex justify-center gap-6">
          <button className="p-3 bg-zinc-50 hover:bg-white border border-zinc-100 rounded-xl hover:shadow-md transition-all text-zinc-600 hover:text-emerald-500">
            <Chrome size={22} />
          </button>
          <button className="p-3 bg-zinc-50 hover:bg-white border border-zinc-100 rounded-xl hover:shadow-md transition-all text-zinc-600 hover:text-emerald-500">
            <Github size={22} />
          </button>
          <button className="p-3 bg-zinc-50 hover:bg-white border border-zinc-100 rounded-xl hover:shadow-md transition-all text-zinc-600 hover:text-emerald-500">
            <Mail size={22} />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="mt-10 text-center">
    <Link href="/signup">
      <span className="text-zinc-400 text-xs font-medium">New analyst?</span>
      <span className="text-zinc-900 text-xs font-bold ml-2 hover:underline cursor-pointer">Register here</span>
    </Link>
  </div>
</div>
      </div>
    </div>
  );
}