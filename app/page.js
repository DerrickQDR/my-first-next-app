import LikeButton from './LikeButton'; 
import styles from './page.module.css'; 
import Link from 'next/link'; // 👈 不要忘记引入 Link 组件！

export default async function ProfileCard() { 
    // 1. 获取随机名言数据
    const quoteRes = await fetch('https://dummyjson.com/quotes/random', { cache: 'no-store' });
    const quoteData = await quoteRes.json();
    
    // 2. 获取博客文章列表（为了不让页面太长，我们只抓取前 3 篇，加上 ?limit=3）
    const postsRes = await fetch('https://dummyjson.com/posts?limit=5');
    const postsData = await postsRes.json();
    const posts = postsData.posts; // 这是一个包含 3 篇文章的数组

    return (
        // 我们用一个大盒子把名片和文章列表包起来，让它们在页面居中
        <main style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '50px' }}>
            
            {/* 你的专属名片（保持原样） */}
            <div className={styles.card}> 
                <h1 className={styles.nameTitle}>前端魔法师 ✨</h1>
                <p className={styles.subtitle}>I am a software engineer</p>
                
                <div className={styles.quoteBox}>
                    "{quoteData.quote}" 
                    <br />
                    <small style={{display: 'block', marginTop: '10px', fontWeight: 'bold'}}>
                        — {quoteData.author}
                    </small>
                </div>
                
                <LikeButton />
            </div>

            {/* 👇 新增的博客文章列表区域 */}
            <div style={{ marginTop: '40px', padding: '0 20px' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>最新文章 📝</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {/* 使用 map 循环把数组里的每一篇文章变成一个可以点击的卡片 */}
                    {posts.map((post) => (
                        <Link 
                            key={post.id} 
                            href={`/blog/${post.id}`} /* 👈 魔法在这里！自动生成 /blog/1, /blog/2 */
                            style={{
                                display: 'block',
                                padding: '20px',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                color: 'inherit',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                border: '1px solid #eaeaea'
                            }}
                        >
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#0070f3' }}>
                                {post.title}
                            </h3>
                            {/* 只显示文章的前面一点点内容 */}
                            <p style={{ margin: 0, color: '#666', fontSize: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {post.body}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

        </main>
    );
}