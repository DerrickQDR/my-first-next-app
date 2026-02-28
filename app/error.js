"use client"; // 记住：错误处理组件必须是客户端组件！

export default function Error({ error, reset }) {
    // error 包含了具体的报错信息
    // reset 是一个 Next.js 提供的函数，调用它会尝试重新加载发生错误的页面

    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#fee2e2', // 浅红色背景
            color: '#991b1b',           // 深红色文字
            borderRadius: '8px',
            marginTop: '20px'
        }}>
            <h2>⚠️ 哎呀，出错了！</h2>
            <p>获取名言失败了，可能是网络开小差了。</p>
            {/* 打印出具体的错误信息（仅供我们开发者调试看） */}
            <p style={{ fontSize: '12px', color: '#666' }}>错误详情: {error.message}</p>
            
            <button 
                onClick={() => reset()} // 点击尝试重新加载
                style={{ 
                    marginTop: '10px', 
                    padding: '8px 16px', 
                    cursor: 'pointer',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px'
                }}
            >
                🔄 再试一次
            </button>
        </div>
    );
}