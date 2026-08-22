import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Frontmatter = {
  title: string;
  date: string;
  kind?: "audio" | "image" | "poem" | "project" | "note" | "release";
  summary?: string;
  cover?: string;
  audio?: string;
  tags?: string[];
  draft?: boolean;
};

export type Entry = Frontmatter & {
  slug: string;
  body: string;
  href: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

function normalizeFrontmatterDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string" && value.trim()) return value.trim();
  return "1970-01-01";
}

function readDir(subdir: string): Entry[] {
  const dir = path.join(CONTENT_ROOT, subdir);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
  return files.map(file => {
    const full = path.join(dir, file);
    const raw = fs.readFileSync(full, "utf8");
    const parsed = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");
    const fm = parsed.data as Partial<Omit<Frontmatter, "date">> & { date?: unknown };
    return {
      title: fm.title ?? slug,
      date: normalizeFrontmatterDate(fm.date),
      kind: fm.kind,
      summary: fm.summary,
      cover: fm.cover,
      audio: fm.audio,
      tags: fm.tags ?? [],
      draft: fm.draft ?? false,
      slug,
      body: parsed.content,
      href: `/${subdir}/${slug}`
    } as Entry;
  });
}

export function getWorks(): Entry[] {
  const all = readDir("works");
  return all.filter(e => !e.draft).sort(byDateDesc);
}

export function getWork(slug: string): Entry | undefined {
  return getWorks().find(e => e.slug === slug);
}

export function getNotes(): Entry[] {
  const all = readDir("notes");
  return all.filter(e => !e.draft).sort(byDateDesc);
}

export function getNote(slug: string): Entry | undefined {
  return getNotes().find(e => e.slug === slug);
}

export function getLatestWork(): Entry | undefined {
  return getWorks()[0];
}

function byDateDesc(a: Entry, b: Entry) {
  return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
}
