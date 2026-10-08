import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

/**
 * Hand-written. The Next counterpart of Astro's `astro:content` for the two
 * collections in the Astro build's src/content.config.ts, with the same API:
 *
 *   getCollection('blog')        one entry per src/content/blog/*.md ({ id, data, body })
 *   getEntry('content', id)      one group of src/content/content.json ({ id, data: { items } })
 *   render(post)                 the post's HTML, as Astro renders Markdown
 *                                (GitHub-flavoured, smart quotes, heading ids)
 */
const DIR = join(process.cwd(), 'src', 'content');

export interface BlogData {
  title: string;
  category: string;
  excerpt: string;
  date: Date;
  author: string;
  authorRole: string;
  authorOrg: string;
  avatar: string;
  cover: string;
}
export interface BlogEntry { id: string; data: BlogData; body: string }
export interface ContentEntry { id: string; data: { items: unknown[] } }

export async function getCollection(name: 'blog'): Promise<BlogEntry[]> {
  if (name !== 'blog') throw new Error(`unknown collection "${name}"`);
  const dir = join(DIR, 'blog');
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((f) => {
      const { data, content } = matter(readFileSync(join(dir, f), 'utf8'));
      // The file name is the id (and the URL), dots included.
      return { id: f.replace(/\.md$/, ''), data: { ...data, date: new Date(data.date) } as BlogData, body: content };
    });
}

export async function getEntry(name: 'content', id: string): Promise<ContentEntry | undefined> {
  if (name !== 'content') throw new Error(`unknown collection "${name}"`);
  const all = JSON.parse(readFileSync(join(DIR, 'content.json'), 'utf8')) as Record<string, unknown[]>;
  return id in all ? { id, data: { items: all[id] } } : undefined;
}

/** Pages put the result in place with dangerouslySetInnerHTML (the generator
 *  turns Astro's <Content /> into that). */
export async function render(entry: BlogEntry): Promise<{ Content: { html: string } }> {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkSmartypants)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(entry.body);
  return { Content: { html: String(html) } };
}
