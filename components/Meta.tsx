import type { Entry } from "../lib/content";

export function EntryCard({ entry }: { entry: Entry }) {
  const date = new Date(entry.date);
  const datestr = isNaN(date.getTime()) ? entry.date : date.toISOString().slice(0, 10);
  return (
    <a href={entry.href} className="block no-underline group">
      <article className="border border-ink-200 rounded-lg overflow-hidden bg-paper hover:border-ink-500 transition">
        {entry.cover ? (
          <div className="aspect-[16/9] overflow-hidden bg-ink-100">
            <img src={entry.cover} alt={entry.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-ink-100 flex items-center justify-center font-mono text-xs text-ink-500">
            {entry.kind ? "未配图" : "未命名"}
          </div>
        )}
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs font-mono text-ink-500 mb-1">
            <time dateTime={entry.date}>{datestr}</time>
            {entry.kind ? <span className="tag">{entry.kind}</span> : null}
          </div>
          <h3 className="text-lg font-semibold group-hover:underline">{entry.title}</h3>
          {entry.summary ? <p className="text-sm text-ink-700 mt-1 line-clamp-2">{entry.summary}</p> : null}
        </div>
      </article>
    </a>
  );
}

export function EntryList({ entries }: { entries: Entry[] }) {
  if (entries.length === 0) {
    return <p className="text-ink-500 font-mono text-sm">这儿还没东西。</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {entries.map(e => <EntryCard key={e.slug} entry={e} />)}
    </div>
  );
}
