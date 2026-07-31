import { marked } from "marked";

export function Markdown({ source }: { source: string }) {
  const html = marked.parse(source, { async: false, gfm: true, breaks: false }) as string;
  return <div className="prose-studio" dangerouslySetInnerHTML={{ __html: html }} />;
}
