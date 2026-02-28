import Link from 'next/link';

export default async function BlogPost({ params }) {
  // 1. 抓住网址里的 id（比如 /blog/5，这里的 id 就是 5）
  const { id } = await params;

  // 2. 拿着这个 id，去真实的公开 API 请求对应的文章！
  // 注意这里的反引号 ` 和 ${id}，它可以把变量拼接到网址里
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  
  // 3. 如果用户乱输入一个不存在的 id（比如 /blog/99999），我们优雅地处理它
  if (!res.ok) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>😭 哎呀，这篇文章好像去了火星...</h2>
        <Link href="/" style={{ color: 'blue', marginTop: '20px', display: 'block' }}>返回首页</Link>
      </div>
    );
  }

  // 4. 把服务器返回的数据解析成我们可以用的 JSON 格式
  const post = await res.json();

  // 5. 渲染页面，把真实的文章标题和内容放进去！
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      {/* 顶部的返回链接 */}
      <Link href="/" style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold', marginBottom: '20px', display: 'inline-block' }}>
        👈 返回首页
      </Link>

      {/* 真实的文章标题 */}
      <h1 style={{ fontSize: '28px', color: '#1a1a1a', marginBottom: '16px', marginTop: '10px' }}>
        {post.title}
      </h1>

      {/* 文章的标签 */}
      <div style={{ marginBottom: '20px' }}>
        {post.tags.map(tag => (
          <span key={tag} style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', marginRight: '8px', fontSize: '12px', color: '#64748b' }}>
            #{tag}
          </span>
        ))}
      </div>

      {/* 真实的文章内容 */}
      <p style={{ color: '#444', lineHeight: '1.8', fontSize: '16px' }}>
        {post.body}
      </p>
    </div>
  );
}