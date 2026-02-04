"use client";

import * as React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { tickers, type TickerKey, type TickerFrame } from "@/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

function format(n: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function TickerCard({
  frame,
  pulse,
}: {
  frame: TickerFrame;
  pulse: "up" | "down" | "flat";
}) {
  const isUp = frame.change > 0;
  const isDown = frame.change < 0;

  return (
    <Card
      className={cn(
        "relative overflow-hidden",
        pulse === "up" && "price-pulse-up",
        pulse === "down" && "price-pulse-down"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 opacity-60",
          isUp && "bg-[radial-gradient(circle_at_30%_0%,rgba(16,185,129,.22),transparent_55%)]",
          isDown && "bg-[radial-gradient(circle_at_30%_0%,rgba(239,68,68,.18),transparent_55%)]",
          !isUp && !isDown && "bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,.12),transparent_55%)]"
        )}
      />
      <CardHeader className="relative">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="truncate">{frame.name}</CardTitle>
            <div className="mt-0.5 text-xs text-zinc-500">{frame.venue}</div>
          </div>
          <Badge variant={isUp ? "up" : isDown ? "down" : "neutral"}>
            {isUp ? "+" : ""}
            {frame.changePct.toFixed(2)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="relative">
        <div className="flex items-end justify-between gap-3">
          <div className="text-2xl font-semibold tracking-tight text-zinc-50">
            {format(frame.price)}
          </div>
          <div
            className={cn(
              "flex items-center gap-1 text-sm",
              isUp && "text-emerald-200",
              isDown && "text-red-200",
              !isUp && !isDown && "text-zinc-300"
            )}
          >
            {isUp ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : isDown ? (
              <ArrowDownRight className="h-4 w-4" />
            ) : null}
            <span>
              {isUp ? "+" : ""}
              {format(frame.change)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TickerStrip() {
  const keys: TickerKey[] = ["NIFTY", "SENSEX", "NASDAQ"];
  const [idx, setIdx] = React.useState(0);
  const prevRef = React.useRef<Record<TickerKey, number> | null>(null);

  React.useEffect(() => {
    const t = window.setInterval(() => setIdx((v) => v + 1), 1800);
    return () => window.clearInterval(t);
  }, []);

  const frames = keys.map((k) => tickers[k].frames[idx % tickers[k].frames.length]);
  const prev = prevRef.current;

  const pulses = keys.reduce(
    (acc, k, i) => {
      const p = prev?.[k];
      const cur = frames[i].price;
      acc[k] = p == null ? "flat" : cur > p ? "up" : cur < p ? "down" : "flat";
      return acc;
    },
    {} as Record<TickerKey, "up" | "down" | "flat">
  );

  React.useEffect(() => {
    prevRef.current = keys.reduce((acc, k, i) => {
      acc[k] = frames[i].price;
      return acc;
    }, {} as Record<TickerKey, number>);
  }, [idx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {keys.map((k, i) => (
        <TickerCard key={k} frame={frames[i]} pulse={pulses[k]} />
      ))}
    </div>
  );
}

