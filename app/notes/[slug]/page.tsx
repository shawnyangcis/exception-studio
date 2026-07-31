import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNotes, getNote } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

export function generateStaticParams() {
  return getNotes().map(n => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const n = getNote(params.slug);
  if (!n) return { title: "not found" };
  return {
    title: `${n.title} · notes · Exception Studio`,
    description: n.summary ?? n.title
  };
}

export default function NoteDetail({ params }: { params: { slug: string } }) {
  const n = getNote(params.slug);
  if (!n) notFound();

  return (
    <article className="container-narrow pt-12 pb-16">
      <p className="font-mono text-xs text-ink-500">
        <Link href="/notes" className="no-underline">← all notes</Link>
      </p>
      <div className="flex items-baseline gap-3 mt-4">
        <time dateTime={n.date} className="font-mono text-xs text-ink-500">{n.date}</time>
        {n.tags?.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <h1 className="mt-2">{n.title}</h1>
      {n.summary ? (
        <p className="text-lg text-ink-700 mt-3">{n.summary}</p>
      ) : null}
      <div className="mt-4">
        <Markdown source={n.body} />
      </div>
    </article>
  );
}
