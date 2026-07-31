import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exception Studio",
  description: "Exception 的个人创作档案——作品、随笔、更新日志。",
  openGraph: {
    title: "Exception Studio",
    description: "作品、随笔、更新日志。",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-ink-200 bg-paper/80 backdrop-blur sticky top-0 z-10">
          <div className="container-wide py-4 flex items-center justify-between">
            <Link href="/" className="no-underline font-bold text-lg flex items-center gap-2">
              <span aria-hidden>🐷</span>
              <span>Exception Studio</span>
            </Link>
            <nav className="flex gap-5 text-sm font-mono">
              <Link href="/works" className="no-underline hover:text-ink-700">作品</Link>
              <Link href="/notes" className="no-underline hover:text-ink-700">随笔</Link>
              <Link href="/about" className="no-underline hover:text-ink-700">关于</Link>
              <Link href="/changelog" className="no-underline hover:text-ink-700">更新日志</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-ink-200 mt-16">
          <div className="container-wide py-6 text-xs font-mono text-ink-500 flex flex-wrap gap-3 justify-between">
            <span>© {new Date().getFullYear()} Exception。用一只粉猪、一支钢笔、一个吉他 pedal 画的。</span>
            <span>Next.js · Tailwind · 托管在 Vercel。</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
