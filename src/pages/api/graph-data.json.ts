import { getCollection } from 'astro:content';

export async function GET() {
  const allPosts = await getCollection('posts', (post) => {
    const data = post.data as any;
    return data.draft !== true;
  });

  const nodes: any[] = [];
  const links: any[] = [];
  const categoryNodes = new Set();
  const tagNodes = new Set();

  allPosts.forEach(post => {
    const data = post.data as any;
    // 👇 1. 在这里解构出 description
    const { title, tags, category, description } = data; 
    const postId = post.slug;

    // 添加文章节点 (恒星)
    nodes.push({
      id: postId,
      name: title,
      // 👇 2. 致命修复：必须把 description 塞进 JSON 里！
      description: description, 
      type: 'post',
      val: 5 
    });

    // 处理分类 (星系中心)
    if (category) {
      const catId = `cat-${category}`;
      if (!categoryNodes.has(catId)) {
        categoryNodes.add(catId);
        nodes.push({ id: catId, name: category, type: 'category', val: 12 });
      }
      links.push({ source: postId, target: catId });
    }

    // 处理标签 (星云支柱)
    if (tags && Array.isArray(tags)) {
      tags.forEach((tag: string) => {
        const tagId = `tag-${tag}`;
        if (!tagNodes.has(tagId)) {
          tagNodes.add(tagId);
          nodes.push({ id: tagId, name: tag, type: 'tag', val: 7 });
        }
        links.push({ source: postId, target: tagId });
      });
    }
  });

  return new Response(JSON.stringify({ nodes, links }), {
    headers: { 'Content-Type': 'application/json' }
  });
}