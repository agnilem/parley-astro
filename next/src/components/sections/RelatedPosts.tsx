// GENERATED from src/components/sections/RelatedPosts.astro by tools/astro-to-next.mjs. Edit the Astro file, then regenerate.
import { getCollection } from '@/lib/collections';
import { dateLabel } from '@/lib/content';

interface Props { slug: string; category: string }

export default async function RelatedPosts({ slug, category }: Props) {
  const posts = (await getCollection('blog')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const others = posts.filter((p) => p.id !== slug);
  const sameCategory = others.filter((p) => p.data.category === category);
  const related = [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, 3);

  return (
    <>
      <section className="related">
        <h3 className="related__title">Related posts</h3>
        <ul className="bgrid" role="list">
          {related.map((p) => (
            <li className="bcard">
              <a className="bcard__link" href={`/blog/${p.id}`}>
                <span className="bcard__media"><img src={p.data.cover} alt="" loading="lazy" /></span>
                <span className="bcard__cat">{p.data.category}</span>
                <h5 className="bcard__title">{p.data.title}</h5>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
