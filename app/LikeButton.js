"use client"; // 这个按钮需要交互，所以它是客户端组件

import { useState } from 'react';

export default function LikeButton() {
    const [count, setCount] = useState(99);
    
    return (
        <button 
            onClick={() => setCount(count + 1)}
            style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
        >
            Like ({count})
        </button>
    );
}