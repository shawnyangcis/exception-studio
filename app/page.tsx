import Link from "next/link"; // Trigger Vercel redeploy 2026-08-21
import { getLatestWork, getWorks, getNotes } from "@/lib/content";
import { EntryCard } from "@/components/Meta";

export default function HomePage() {
  const latest = getLatestWork();
  const works = getWorks().slice(0, 3);
  const notes = getNotes().slice(0, 3);

  return (
    <>
      <section className="container-narrow pt-20 pb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-500">一人工程 · solus opus · 一人搞定所有事</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
          今天 我一个人搞定所有事。
        </h1>
        <p className="mt-6 text-lg text-ink-700 leading-relaxed max-w-2xl">
          配图散文 + 一人工程 + 营销个人品牌。
          simedw、vladislav-kalinkin、isoprophlex、Continuator 2003 等独立的人，一个人搞定所有事。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/works" className="no-underline">
            <span className="tag">看作品 →</span>
          </Link>
          <Link href="/notes" className="no-underline">
            <span className="tag">读随笔 →</span>
          </Link>
        </div>
      </section>

      {latest ? (
        <section className="container-wide pb-12">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-semibold">最新作品</h2>
            <Link href="/works" className="font-mono text-xs text-ink-500 no-underline">全部作品 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Link href={latest.href} className="block no-underline">
              {latest.cover ? (
                <div className="aspect-square overflow-hidden rounded-lg border border-ink-200 bg-ink-100">
                  <img src={latest.cover} alt={latest.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="aspect-square bg-ink-100 rounded-lg flex items-center justify-center font-mono text-ink-500">暂无封面</div>
              )}
            </Link>
            <div>
              <p className="font-mono text-xs text-ink-500 uppercase tracking-wider">
                {latest.kind ?? "未分类"} · {latest.date}
              </p>
              <h3 className="text-3xl font-bold mt-2">
                <Link href={latest.href}>{latest.title}</Link>
              </h3>
              {latest.summary ? (
                <p className="mt-3 text-ink-700 leading-relaxed">{latest.summary}</p>
              ) : null}
              {latest.audio ? (
                <audio controls className="w-full mt-4" src={latest.audio}>
                  你的浏览器不支持 audio 标签。
                </audio>
              ) : null}
              <p className="mt-6">
                <Link href={latest.href} className="font-mono text-sm">看完整作品 →</Link>
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {works.length > 0 ? (
        <section className="container-wide pb-12">
          <h2 className="text-2xl font-semibold mb-4">更多作品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {works.map(w => <EntryCard key={w.slug} entry={w} />)}
          </div>
        </section>
      ) : null}

      {notes.length > 0 ? (
        <section className="container-wide pb-16">
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="text-2xl font-semibold">最新随笔</h2>
            <Link href="/notes" className="font-mono text-xs text-ink-500 no-underline">全部随笔 →</Link>
          </div>
          <ul className="space-y-3">
            {notes.map(n => (
              <li key={n.slug} className="border-b border-ink-200 pb-3">
                <Link href={n.href} className="no-underline flex items-baseline justify-between gap-4">
                  <span className="font-medium">{n.title}</span>
                  <span className="font-mono text-xs text-ink-500">{n.date}</span>
                </Link>
                {n.summary ? <p className="text-sm text-ink-700 mt-1">{n.summary}</p> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </>
  );
}
