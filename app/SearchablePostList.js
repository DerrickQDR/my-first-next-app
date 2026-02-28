"use client"; // 包含交互（输入框和状态），必须是客户端组件！

import { useState } from 'react';
import Link from 'next/link';

// 这个组件接收一个参数 initialPosts，也就是服务器传过来的初始文章列表
export default function SearchablePostList({ initialPosts }) {
    // 记住用户在搜索框里输入了什么，默认是空的
    const [searchTerm, setSearchTerm] = useState('');

    // 核心魔法：根据搜索词过滤文章！
    // 如果文章的标题包含了用户输入的词，就把它留下来
    const filteredPosts = initialPosts.filter((post) => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* 1. 搜索输入框 */}
            <input 
                type="text" 
                placeholder="🔍 搜索文章标题..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // 当用户输入时，更新状态
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    marginBottom: '20px',
                    outline: 'none'
                }}
            />

            {/* 2. 展示过滤后的文章列表 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {filteredPosts.length === 0 ? (
                    // 如果没搜到，给个友好的提示
                    <p style={{ textAlign: 'center', color: '#888' }}>没有找到相关文章 🥲</p>
                ) : (
                    // 如果搜到了，就把它们 map 渲染出来
                    filteredPosts.map((post) => (
                        <Link 
                            key={post.id} 
                            href={`/blog/${post.id}`}
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
                            <p style={{ margin: 0, color: '#666', fontSize: '14px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {post.body}
                            </p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}