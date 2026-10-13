// GENERATED from src/pages/blog/[slug].astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { getCollection, render } from '@/lib/collections';
import Base from '@/layouts/Base';
import RelatedPosts from '@/components/sections/RelatedPosts';
import { dateLabel } from '@/lib/content';

async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return (await getStaticPaths()).map((p) => p.params);
}


export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: requested } = await params;
  const { post } = ((await getStaticPaths()).find((p) => p.params.slug === requested)!.props) as any;
  const { Content } = await render(post);
  const d = post.data;

  return (
    <>
      <Base
        title={`${d.title} | Parley AI Agent Next.js Template`}
        description={`Read ${d.title} from the Parley AI agent Next.js template blog, featuring practical articles for AI agents, automation workflows, product updates, and SaaS teams.`}
        path={`/blog/${post.id}`}
        ogImage={d.ogImage ?? d.cover}
        cta={false}
      >
        <article className="article">
          <a className="article__back" href="/blog">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6.5 9 12l5.5 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Blog
          </a>

          <header className="article__head">
            <p className="badge">{d.category}</p>
            <h1 className="article__title">{d.title}</h1>
            <p className="article__lede">{d.excerpt}</p>
            <div className="article__author">
              {d.avatar && <img className="article__avatar" src={d.avatar} alt="" width="40" height="40" />}
              <p className="article__name">{d.author}</p>
              <p className="article__role">{d.authorOrg} <span aria-hidden="true">•</span> {d.authorRole}</p>
            </div>
          </header>

          <img className="article__cover" src={d.cover} alt="" />

          <div dangerouslySetInnerHTML={{ __html: Content.html }} className="article__body"></div>
        </article>

        <RelatedPosts slug={post.id} category={post.data.category} />
      </Base>
    </>
  );
}
