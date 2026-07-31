import type { Metadata } from "next";
import { getChangelog } from "@/lib/content";
import { Markdown } from "@/components/Markdown";

export const metadata: Metadata = {
  title: "changelog · Exception Studio",
  description: "Site update log — what's new, what's broken, what I shipped."
};

export default function ChangelogPage() {
  const entries = getChangelog();
  return (
    <section className="container-narrow pt-12 pb-16">
      <h1>changelog</h1>
      <p className="text-ink-700 mt-2">
        What changed and when. Newest first.
      </p>

      {entries.length === 0 ? (
        <p className="text-ink-500 font-mono text-sm mt-8">No changelog entries yet.</p>
      ) : (
        <ol className="mt-8 space-y-8">
          {entries.map(e => (
            <li key={e.slug} className="border-l-2 border-ink-300 pl-5">
              <div className="flex items-baseline gap-3">
                <time dateTime={e.date} className="font-mono text-xs text-ink-500">{e.date}</time>
                {e.kind ? <span className="tag">{e.kind}</span> : null}
              </div>
              <h2 className="text-xl font-semibold mt-1 m-0">{e.title}</h2>
              <div className="mt-2 text-ink-700">
                <Markdown source={e.body} />
              </div>
              {e.tags && e.tags.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-1">
                  {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
