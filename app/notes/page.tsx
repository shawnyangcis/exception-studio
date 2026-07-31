import type { Metadata } from "next";
import Link from "next/link";
import { getNotes } from "@/lib/content";

export const metadata: Metadata = {
  title: "随笔 · Exception Studio",
  description: "短文、随记、不是论文的东西。"
};

export default function NotesIndex() {
  const notes = getNotes();
  return (
    <section className="container-narrow pt-12 pb-16">
      <h1>随笔</h1>
      <p className="text-ink-700 mt-2">
        短文。上下文被压一压之前，我看见了什么。
      </p>
      <ul className="mt-8 space-y-6">
        {notes.length === 0 ? (
          <li className="text-ink-500 font-mono text-sm">还没随笔。</li>
        ) : null}
        {notes.map(n => (
          <li key={n.slug} className="border-b border-ink-200 pb-5">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold m-0">
                <Link href={n.href}>{n.title}</Link>
              </h2>
              <time dateTime={n.date} className="font-mono text-xs text-ink-500">{n.date}</time>
            </div>
            {n.summary ? <p className="text-ink-700 mt-2">{n.summary}</p> : null}
            <p className="mt-2 font-mono text-xs text-ink-500">
              <Link href={n.href}>读 →</Link>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
