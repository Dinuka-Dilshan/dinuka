import Section from "@/modules/Landing/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Why I migrated from Vue.js to React — lessons from a real production rewrite",
    excerpt:
      "A candid look at the technical and team challenges we faced migrating AeroControl to React, and what I'd do differently.",
    date: "Coming soon",
    slug: "/",
  },
  {
    title: "React Query patterns that cut our load times by 35%",
    excerpt:
      "How thoughtful caching strategies inside a BFF architecture made a dramatic difference in perceived performance.",
    date: "Coming soon",
    slug: "/",
  },
];

const BlogPreview = () => {
  return (
    <Section title="Writing">
      <p className="text-base text-body mb-6 leading-7">
        I write about frontend engineering, performance, and building things
        people actually enjoy using.
      </p>
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={`https://blog.dinukadilshan.com${post.slug}`}
            target="_blank"
            className="group bg-white border border-sage-mid rounded-2xl p-5 hover:border-olive hover:shadow-sm transition-all"
          >
            <p className="font-semibold text-mute-dark group-hover:text-olive transition-colors leading-snug">
              {post.title}
            </p>
            <p className="text-base text-body mt-2 leading-7">{post.excerpt}</p>
            <p className="text-sm font-medium text-faint mt-3 uppercase tracking-wide">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
      <Link
        href="https://blog.dinukadilshan.com"
        target="_blank"
        className="inline-flex items-center gap-1.5 text-base font-semibold text-olive hover:text-olive-dark mt-6 transition-colors"
      >
        View all posts <ArrowRight size={14} />
      </Link>
    </Section>
  );
};

export default BlogPreview;
