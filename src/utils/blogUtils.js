import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const CONTENT_DIR = path.join(process.cwd(), "src/lib/content");

marked.setOptions({ gfm: true });

function resolveLocalImage(image) {
  if (!image) return image;
  if (image.startsWith("http") || image.startsWith("/")) return image;
  return `/images/resources/${image}`;
}

// Next.js image optimizer 500s on CMS webp; Figma heroes are stored locally.
function resolveCmsImage(image) {
  if (!image || typeof image !== "string") return image;
  const match = image.match(/News-?(\d+)\.(?:webp|png|jpe?g)$/i);
  if (!match) return image;
  const n = String(match[1]).padStart(2, "0");
  return `/images/news/news-${n}.png`;
}

async function getLocalPosts() {
  let files = [];
  try {
    files = await readdir(CONTENT_DIR);
  } catch {
    return [];
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const text = await readFile(path.join(CONTENT_DIR, file), "utf8");
        const { content, data } = matter(text);

        // Legacy MD without date is ignored (WordPress is the source for those)
        if (!data.date) return null;

        const slug = file.slice(0, -".md".length);
        // Drafts stay hidden everywhere, including any WordPress post with the same slug
        if (data.draft) return { slug, draft: true };

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt || "",
          date: data.date,
          format_date: data.format_date || data.date,
          body: marked.parse(content),
          image: resolveLocalImage(data.image),
          seo_title: data.seo_title || data.title,
          seo_description: data.seo_description || data.excerpt || "",
          categories: data.categories || [],
          label: data.label || data.categories?.[0] || "",
        };
      })
  );

  return posts.filter(Boolean);
}

async function getWpPosts() {
  if (!apiUrl) return [];

  try {
    const response = await fetch(`${apiUrl}/posts`, {
      next: {
        tags: ["blog"],
        revalidate: 200,
      },
    });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function getMergedPosts(category = "") {
  const [wpPosts, localPosts] = await Promise.all([
    getWpPosts(),
    getLocalPosts(),
  ]);

  const bySlug = new Map();
  for (const post of wpPosts) {
    bySlug.set(post.slug, {
      ...post,
      image: resolveCmsImage(post.image),
    });
  }
  for (const post of localPosts) {
    if (post.draft) bySlug.delete(post.slug);
    else bySlug.set(post.slug, post);
  }

  let posts = Array.from(bySlug.values()).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  if (category) {
    posts = posts.filter((post) => post.categories?.includes(category));
  }

  return posts;
}

function resolveSliceStart(page, perPage, offset) {
  if (offset !== "" && offset !== undefined && offset !== null) {
    return Number(offset) || 0;
  }
  if (page !== "" && page !== undefined && page !== null) {
    const pageNum = Number(page) || 1;
    const limit = Number(perPage) || 4;
    return (pageNum - 1) * limit;
  }
  return 0;
}

export async function fetchPosts(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export async function getPost(slug) {
  const posts = await getMergedPosts();
  return posts.find((post) => post.slug === slug);
}

export async function getPosts(page = 1, perPage = 4, category = "", offset) {
  const posts = await getMergedPosts(category);
  const start = resolveSliceStart(page, perPage, offset);
  const limit =
    perPage !== "" && perPage !== undefined && perPage !== null
      ? Number(perPage)
      : posts.length;

  return posts.slice(start, start + limit);
}

export async function getPageCount(category = "", perPage = 4) {
  const posts = await getMergedPosts(category);
  const limit = Number(perPage) || 4;
  return Math.ceil(posts.length / limit);
}
