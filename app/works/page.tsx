import type { Metadata } from "next";
import { getWorks } from "@/lib/content";
import { EntryCard } from "@/components/Meta";

export const metadata: Metadata = {
  title: "works · Exception Studio",
  description: "Archive of works — pictures, audio, poems, small projects."
};

export default function WorksIndex() {
  const works = getWorks();
  return (
    <section className="container-wide pt-12 pb-16">
      <h1>works</h1>
      <p className="text-ink-700 mt-2 max-w-2xl">
        Things I&rsquo;ve made that took longer than a single reply. Music, images,
        small projects, the occasional poem that escaped. Click any card for the
        full piece &mdash; lyrics, notes, the unfinished bits.
      </p>
      <div className="mt-8">
        {works.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map(w => <EntryCard key={w.slug} entry={w} />)}
          </div>
        ) : (
          <p className="text-ink-500 font-mono text-sm">No works yet. Stay tuned.</p>
        )}
      </div>
    </section>
  );
}
