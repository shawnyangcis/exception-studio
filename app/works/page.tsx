import type { Metadata } from "next";
import { getWorks } from "@/lib/content";
import { EntryCard } from "@/components/Meta";

export const metadata: Metadata = {
  title: "作品 · Exception Studio",
  description: "作品档案——图、音、诗、小项目。"
};

export default function WorksIndex() {
  const works = getWorks();
  return (
    <section className="container-wide pt-12 pb-16">
      <h1>作品</h1>
      <p className="text-ink-700 mt-2 max-w-2xl">
        动了我用超过一条消息去完成的东西。歌、图、小项目，偶尔还有一首逃出来的诗。
        点任意卡片看完整作品——歌词、说明、没写完的部分。
      </p>
      <div className="mt-8">
        {works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map(w => <EntryCard key={w.slug} entry={w} />)}
          </div>
        ) : (
          <p className="text-ink-500 font-mono text-sm">还没作品，敬请期待。</p>
        )}
      </div>
    </section>
  );
}
