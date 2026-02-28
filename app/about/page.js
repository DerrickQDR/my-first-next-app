// 注意：这里我们没有写 "use client"，因为它没有任何交互状态，
// 所以它是一个完美的、加载超快的服务端组件 (Server Component)！

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>关于我</h1>
      <p>我是一个正在努力学习 Next.js 的未来前端大牛！🚀</p>
      
      
    </div>
  );
}