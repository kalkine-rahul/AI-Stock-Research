"use client";

import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Bot, Send, Sparkles, User } from "lucide-react";

import { iris } from "@/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Role = "user" | "assistant";
type Msg = { id: string; role: Role; content: string };

function mdComponents() {
  return {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2 className="mt-3 text-sm font-semibold text-zinc-100" {...props} />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="text-sm leading-6 text-zinc-200/90" {...props} />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-200/90" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol className="ml-4 list-decimal space-y-1 text-sm text-zinc-200/90" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="leading-6" {...props} />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
      <strong className="font-semibold text-zinc-50" {...props} />
    ),
    table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
      <div className="overflow-x-auto">
        <table className="mt-2 w-full text-left text-xs" {...props} />
      </div>
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead className="border-b border-white/10 text-zinc-200" {...props} />
    ),
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody className="text-zinc-300" {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className="border-b border-white/5" {...props} />
    ),
    th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
      <th className="px-2 py-2 font-medium" {...props} />
    ),
    td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
      <td className="px-2 py-2 align-top" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
      <code className="rounded-md border border-white/10 bg-white/5 px-1 py-0.5 text-[11px] text-zinc-100" {...props} />
    ),
  } as const;
}

function Bubble({
  role,
  children,
}: {
  role: Role;
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <Bot className="h-4 w-4 text-emerald-200" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl border px-3 py-2",
          isUser
            ? "border-emerald-500/15 bg-emerald-500/10"
            : "border-white/10 bg-white/5"
        )}
      >
        {children}
      </div>
      {isUser && (
        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <User className="h-4 w-4 text-zinc-300" />
        </div>
      )}
    </div>
  );
}

export function IrisChat({ className }: { className?: string }) {
  const [messages, setMessages] = React.useState<Msg[]>([
    { id: "welcome", role: "assistant", content: iris.welcome },
  ]);
  const [text, setText] = React.useState("");
  const [thinking, setThinking] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, thinking]);

  function send(content: string) {
    const trimmed = content.trim();
    if (!trimmed) return;

    setMessages((m) => [
      ...m,
      { id: crypto.randomUUID(), role: "user", content: trimmed },
    ]);
    setText("");
    setThinking(true);

    const reply =
      iris.responses.get(trimmed) ??
      `## Iris\n\nI can help with:\n- **thesis** + catalysts\n- valuation snapshot\n- risk notes\n\nTell me: *horizon*, *risk appetite*, and whether you prefer **growth** or **cashflow**.`;

    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "assistant", content: reply },
      ]);
      setThinking(false);
    }, 650);
  }

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-base">Iris</CardTitle>
            <div className="mt-1 text-xs text-zinc-500">
              AI Research Assistant · Markdown enabled
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-300">
            <Sparkles className="h-4 w-4 text-emerald-200" />
            Pro Mode
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex h-[calc(100%-64px)] flex-col gap-3 pt-3">
        <div className="flex flex-wrap gap-2">
          {iris.suggestedPrompts.map((p) => (
            <button
              key={p}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/10"
              onClick={() => send(p)}
              type="button"
            >
              {p}
            </button>
          ))}
        </div>

        <ScrollArea className="flex-1 rounded-2xl border border-white/10 bg-[#070a10]/35 p-3">
          <div className="space-y-3">
            {messages.map((m) => (
              <Bubble key={m.id} role={m.role}>
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={mdComponents()}
                >
                  {m.content}
                </ReactMarkdown>
              </Bubble>
            ))}

            {thinking && (
              <Bubble role="assistant">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                  Thinking…
                </div>
              </Bubble>
            )}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        <div className="flex gap-2">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask Iris… (Shift+Enter for newline)"
            className="min-h-[48px] flex-1"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (!thinking) send(text);
              }
            }}
          />
          <Button
            className="h-[48px] rounded-2xl"
            onClick={() => send(text)}
            disabled={thinking || text.trim().length === 0}
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

