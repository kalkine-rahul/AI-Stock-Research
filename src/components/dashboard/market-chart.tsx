"use client";

import * as React from "react";
import {
  ColorType,
  CrosshairMode,
  LineStyle,
  type IChartApi,
  type ISeriesApi,
  createChart,
} from "lightweight-charts";
import { Sparkles } from "lucide-react";

import { chart as chartMock } from "@/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function MarketChart({
  className,
}: {
  className?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const chartRef = React.useRef<IChartApi | null>(null);
  const candleRef = React.useRef<ISeriesApi<"Candlestick"> | null>(null);
  const overlayARef = React.useRef<ISeriesApi<"Line"> | null>(null);
  const overlayBRef = React.useRef<ISeriesApi<"Line"> | null>(null);
  const overlayProjRef = React.useRef<ISeriesApi<"Line"> | null>(null);

  const [overlayOn, setOverlayOn] = React.useState(false);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const chart = createChart(el, {
      height: 420,
      width: el.clientWidth,
      layout: {
        background: { type: ColorType.Solid, color: "rgba(0,0,0,0)" },
        textColor: "rgba(231,234,240,0.70)",
        fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.06)" },
        horzLines: { color: "rgba(255,255,255,0.06)" },
      },
      rightPriceScale: {
        borderColor: "rgba(255,255,255,0.10)",
      },
      timeScale: {
        borderColor: "rgba(255,255,255,0.10)",
      },
      crosshair: {
        mode: CrosshairMode.Magnet,
        vertLine: { color: "rgba(255,255,255,0.18)" },
        horzLine: { color: "rgba(255,255,255,0.18)" },
      },
      handleScroll: true,
      handleScale: true,
    });

    const candle = chart.addCandlestickSeries({
      upColor: "rgba(16,185,129,0.95)",
      downColor: "rgba(239,68,68,0.95)",
      wickUpColor: "rgba(16,185,129,0.95)",
      wickDownColor: "rgba(239,68,68,0.95)",
      borderVisible: false,
    });
    candle.setData(chartMock.candles);

    chart.timeScale().fitContent();

    chartRef.current = chart;
    candleRef.current = candle;

    const ro = new ResizeObserver(() => {
      chart.applyOptions({ width: el.clientWidth });
    });
    ro.observe(el);

    return () => {
      ro.disconnect();
      chart.remove();
      chartRef.current = null;
      candleRef.current = null;
      overlayARef.current = null;
      overlayBRef.current = null;
      overlayProjRef.current = null;
    };
  }, []);

  React.useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    function clearOverlay(c: IChartApi) {
      if (overlayARef.current) c.removeSeries(overlayARef.current);
      if (overlayBRef.current) c.removeSeries(overlayBRef.current);
      if (overlayProjRef.current) c.removeSeries(overlayProjRef.current);
      overlayARef.current = null;
      overlayBRef.current = null;
      overlayProjRef.current = null;
    }

    if (!overlayOn) {
      clearOverlay(chart);
      return;
    }

    clearOverlay(chart);

    const a = chart.addLineSeries({
      color: "rgba(16,185,129,0.75)",
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
    });
    a.setData([...chartMock.predictionA, ...chartMock.projected]);

    const b = chart.addLineSeries({
      color: "rgba(239,68,68,0.55)",
      lineWidth: 2,
      priceLineVisible: false,
      lastValueVisible: false,
    });
    b.setData(chartMock.predictionB);

    const proj = chart.addLineSeries({
      color: "rgba(231,234,240,0.55)",
      lineWidth: 1,
      lineStyle: LineStyle.Dashed,
      priceLineVisible: false,
      lastValueVisible: false,
    });
    proj.setData(chartMock.projected);

    overlayARef.current = a;
    overlayBRef.current = b;
    overlayProjRef.current = proj;
  }, [overlayOn]);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <CardTitle className="text-base">{chartMock.title}</CardTitle>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">
                {chartMock.symbol}
              </span>
              <span>1D candles</span>
              {overlayOn ? (
                <Badge variant="up">AI Overlay: ON</Badge>
              ) : (
                <Badge variant="neutral">AI Overlay: OFF</Badge>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              className={cn(
                "rounded-2xl",
                overlayOn
                  ? "border-emerald-500/25 bg-emerald-500/10 hover:bg-emerald-500/15"
                  : undefined
              )}
              onClick={() => setOverlayOn((v) => !v)}
            >
              <Sparkles className="h-4 w-4" />
              Smart Overlay
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-3">
        <div className="rounded-xl border border-white/10 bg-[#070a10]/40 p-2">
          <div ref={containerRef} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

