"use client";

import * as React from "react";
import { Globe, TrendingUp } from "lucide-react";

import { marketSearchItems } from "@/mockData";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

export function GlobalMarketSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const isK = e.key.toLowerCase() === "k";
      if (isK && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <Button
        variant="secondary"
        className="h-11 w-full justify-between rounded-2xl bg-white/5 hover:bg-white/10 lg:w-[520px]"
        onClick={() => setOpen(true)}
      >
        <span className="flex items-center gap-2 text-zinc-300">
          <Globe className="h-4 w-4 text-zinc-400" />
          <span className="text-sm">Global Market Search…</span>
        </span>
        <span className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300 sm:flex">
          <span className="font-mono">CTRL</span>
          <span className="font-mono">K</span>
        </span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-none">
          <CommandInput placeholder="Search indices, stocks, sectors…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Markets">
              {marketSearchItems.map((item) => (
                <CommandItem
                  key={item.title}
                  onSelect={() => setOpen(false)}
                >
                  <TrendingUp className="h-4 w-4 text-emerald-200" />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="truncate text-sm text-zinc-100">
                      {item.title}
                    </div>
                    <div className="truncate text-xs text-zinc-500">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="ml-auto rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-400">
                    {item.type}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Shortcuts">
              <CommandItem onSelect={() => setOpen(false)}>
                <span className="text-zinc-400">Open</span>{" "}
                <span className="text-zinc-100">AI Insights</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <span className="text-zinc-400">Open</span>{" "}
                <span className="text-zinc-100">Screeners</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}

