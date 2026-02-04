"use client";
import { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function StockChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: { background: { color: '#ffffff' }, textColor: '#444' },
      grid: { vertLines: { color: '#f0f0f0' }, horzLines: { color: '#f0f0f0' } },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#00D09C', downColor: '#EB5757', borderVisible: false,
      wickUpColor: '#00D09C', wickDownColor: '#EB5757',
    });

    // Dummy Data
    candlestickSeries.setData([
      { time: '2024-01-01', open: 150, high: 155, low: 148, close: 152 },
      { time: '2024-01-02', open: 152, high: 158, low: 151, close: 156 },
      { time: '2024-01-03', open: 156, high: 160, low: 155, close: 158 },
      { time: '2024-01-04', open: 158, high: 158, low: 152, close: 153 },
      { time: '2024-01-05', open: 153, high: 157, low: 153, close: 155 },
    ]);

    return () => chart.remove();
  }, []);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
}