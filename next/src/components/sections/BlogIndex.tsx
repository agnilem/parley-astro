// GENERATED from src/components/sections/BlogIndex.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { getCollection } from '@/lib/collections';
import LoadMore from '@/components/LoadMore';
import { group, dateLabel, type PostCard } from '@/lib/content';

export default async function BlogIndex() {
  const posts = await getCollection('blog');
  const bySlug = new Map(posts.map((p) => [p.id, p.data]));
  const cards = (await group<PostCard>('postCards')).map((c) => {
    const d = c.slug ? bySlug.get(c.slug) : undefined;
    return d
      ? { ...c, title: d.title, category: d.category, excerpt: d.excerpt, cover: d.cover, dateLabel: dateLabel(d.date) }
      : c;
  });
  const featured = cards.find((c) => c.featured)!;
  const side = cards.filter((c) => c.side);
  const rest = cards.filter((c) => !c.featured && !c.side);
  const PER_PAGE = rest.length;
  const Tag = (slug: string | null) => (slug ? 'a' : 'div');

  return (
    <>
      <section className="blog">
        <div className="blog__top">
          <article className="bfeat">
            <a className="bfeat__media" href={`/blog/${featured.slug}`}>
              <img src={featured.cover} alt="" />
            </a>
            <div className="bfeat__foot">
              <h4 className="bfeat__title"><a href={`/blog/${featured.slug}`}>{featured.title}</a></h4>
              <div className="bfeat__meta">
                <p className="bcard__cat">{featured.category}</p>
                <p className="bcard__excerpt">{featured.excerpt}</p>
              </div>
            </div>
          </article>

          <ul className="bside" role="list">
            {side.map((c) => (
              <li className="bside__item">
                <p className="bcard__cat">{c.category}</p>
                <h5 className="bside__title"><a href={`/blog/${c.slug}`}>{c.title}</a></h5>
                <p className="bcard__excerpt">{c.excerpt}</p>
                <p className="bcard__date">{c.dateLabel}</p>
              </li>
            ))}
          </ul>
        </div>

        <ul className="bgrid" role="list">
          {rest.map((c, i) => {
            const El = Tag(c.slug);
            return (
              <li className="bcard" data-card="" hidden={i >= PER_PAGE}>
                <El className="bcard__link" {...(c.slug ? { href: `/blog/${c.slug}` } : {})}>
                  <span className="bcard__media"><img src={c.cover} alt="" loading="lazy" /></span>
                  <span className="bcard__cat">{c.category}</span>
                  <h5 className="bcard__title">{c.title}</h5>
                </El>
              </li>
            );
          })}
        </ul>

        <div className="blog__more">
          <LoadMore />
        </div>
      </section>
    </>
  );
}
