export const CACHE_TAG_REVIEWS = "posts";

const WORDPRESS_API_URL = "https://cms.enlight.news/wp-json/custom/v1";

/*export async function getSlugs() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();

    if (!Array.isArray(data)) {
        throw new Error("Unable to fetch slugs from WordPress API");
    }

    return data.map(post => post.slug);
}*/

/*export async function getPosts() {
    const response = await fetch(`${WORDPRESS_API_URL}/posts`, {
        next: {
            tags: [CACHE_TAG_REVIEWS],
        }
    });
    const data = await response.json();
    
    const posts = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return posts; 
} */

export async function getPost(slug) {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === slug);
  //console.log(post);
  return post;
}

export async function getPosts(page = 1, perPage = 4, category = "", offset) {
  let url = `${WORDPRESS_API_URL}/posts?`;

  if (page) url += `page=${page}&`;
  if (perPage) url += `per_page=${perPage}&`;
  if (category) url += `category=${category}&`;
  if (offset) url += `offset=${offset}&`;

  url = url.slice(0, -1);
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });
  console.log(url);
  const data = await response.json();
  //console.log(data);
  const posts = data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return posts;
}

export async function getPage(pageId) {
  const response = await fetch(`${WORDPRESS_API_URL}/page/${pageId}`, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });
  const page = await response.json();
  return page;
}

export async function getPageCount(category = "") {
  let url = `${WORDPRESS_API_URL}/posts?`;
  if (category) url += `category=${category}&`;
  url = url.slice(0, -1);
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS],
    },
  });
  const data = await response.json();
  const posts = data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const pageCount = Math.ceil(posts.length / 7);
  return pageCount;
}
