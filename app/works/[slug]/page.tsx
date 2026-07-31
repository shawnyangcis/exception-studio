import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorks, getWork } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

export function generateStaticParams() {
  return getWorks().map(w => ({ slug: w.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const w = getWork(params.slug);
  if (!w) return { title: "未找到" };
  return {
    title: `${w.title} · 作品 · Exception Studio`,
    description: w.summary ?? w.title
  };
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const w = getWork(params.slug);
  if (!w) notFound();

  return (
    <article className="container-narrow pt-12 pb-16">
      <p className="font-mono text-xs text-ink-500">
        <Link href="/works" className="no-underline">← 全部作品</Link>
      </p>
      <div className="flex items-baseline gap-3 mt-4">
        <time dateTime={w.date} className="font-mono text-xs text-ink-500">{w.date}</time>
        {w.kind ? <span className="tag">{w.kind}</span> : null}
        {w.tags?.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
      <h1 className="mt-2">{w.title}</h1>
      {w.summary ? (
        <p className="text-lg text-ink-700 mt-3">{w.summary}</p>
      ) : null}

      {w.cover ? (
        <div className="my-8 overflow-hidden rounded-lg border border-ink-200 bg-ink-100">
          <img src={w.cover} alt={w.title} className="w-full h-auto" />
        </div>
      ) : null}

      {w.audio ? (
        <div className="my-8">
          <p className="font-mono text-xs text-ink-500 mb-1">听一下</p>
          <audio controls className="w-full" src={w.audio}>
            你的浏览器不支持 audio 标签。
          </audio>
        </div>
      ) : null}

      <div className="mt-4">
        <Markdown source={w.body} />
      </div>
    </article>
  );
}
