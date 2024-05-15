const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchPosts(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}

export async function getPost(slug) {
  const posts = await getPosts("", "", "", 0);
  const post = posts.find((post) => post.slug === slug);
  //console.log(post);
  return post;
}

export async function getPosts(page = 1, perPage = 4, category = "", offset) {
  let url = `${apiUrl}/posts?`;

  if (page) url += `page=${page}&`;
  if (perPage) url += `per_page=${perPage}&`;
  if (category) url += `category=${category}&`;
  if (offset) url += `offset=${offset}&`;

  url = url.slice(0, -1);
  const response = await fetch(url, {
    next: {
      tags: ["blog"],
    },
  });
  //console.log(url);
  const data = await response.json();
  //console.log(data);
  const posts = data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return posts;
}

export async function getPage(pageId) {
  const response = await fetch(`${apiUrl}/page/${pageId}`, {
    next: {
      tags: ["blog"],
    },
  });
  const page = await response.json();
  return page;
}

export async function getPageCount(category = "") {
  let url = `${apiUrl}/posts?`;
  if (category) url += `category=${category}&`;
  url = url.slice(0, -1);
  const response = await fetch(url, {
    next: {
      tags: ["blog"],
    },
  });
  const data = await response.json();
  const posts = data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const pageCount = Math.ceil(posts.length / 4);
  return pageCount;
}
