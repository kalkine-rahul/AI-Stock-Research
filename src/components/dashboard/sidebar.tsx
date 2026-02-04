"use client";

import {
  Brain,
  CandlestickChart,
  Home,
  LayoutGrid,
  PieChart,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", icon: Home },
  { label: "Portfolio", icon: PieChart },
  { label: "AI Insights", icon: Brain },
  { label: "Screeners", icon: LayoutGrid },
];

export function Sidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "relative lg:h-[calc(100dvh-1.25rem)]",
        className
      )}
    >
      <div className="lg:sticky lg:top-2.5">
        <div className="hidden lg:flex h-[calc(100dvh-1.25rem)] w-[78px] flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-2 py-3 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="flex w-full flex-col items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <CandlestickChart className="h-5 w-5 text-emerald-200" />
            </div>
            <div className="mt-2 flex w-full flex-col gap-1">
              {navItems.map((item, idx) => (
                <button
                  key={item.label}
                  className={cn(
                    "group flex h-11 w-full items-center justify-center rounded-xl border border-transparent text-zinc-300 transition",
                    idx === 0
                      ? "bg-white/5 text-zinc-50 border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,.08)]"
                      : "hover:bg-white/5 hover:text-zinc-50"
                  )}
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-2">
            <div className="h-10 w-10 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5" />
            <div className="text-[10px] text-zinc-500">PRO</div>
          </div>
        </div>

        {/* Mobile bottom nav */}
        <div className="lg:hidden fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">
          <div className="grid grid-cols-4 gap-1 p-1.5">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                className={cn(
                  "flex items-center justify-center rounded-xl px-2 py-3 text-zinc-300",
                  idx === 0 ? "bg-white/5 text-zinc-50" : "hover:bg-white/5"
                )}
              >
                <item.icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

