import Link from 'next/link';

// 这是网页的默认标题和描述（对搜索引擎很有用）
export const metadata = {
  title: '我的个人网站',
  description: '我的第一个 Next.js 项目',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        {/* 👇 无论你怎么切换页面，这个导航栏都雷打不动 */}
        <nav style={{ padding: '20px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          <b style={{ marginRight: '20px' }}>我的站点</b>
          <Link href="/" style={{ marginRight: '15px', color: 'blue' }}>首页</Link>
          <Link href="/about" style={{ color: 'blue' }}>关于我</Link>
        </nav>

        {/* 👇 这是各个 page.js 真正显示的地方 */}
        <main style={{ padding: '20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}