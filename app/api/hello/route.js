// 从 Next.js 引入专门处理服务器响应的工具
import { NextResponse } from 'next/server';

// export async function GET 意思是：当有人用 GET 方法请求这个网址时，执行这个函数
export async function GET() {
    
    // 假设这是我们从数据库里查出来的数据（这里我们自己伪造一个）
    const mySecretData = {
        success: true,
        message: "你好！这是来自 Next.js 后端的秘密消息！🚀",
        skills: ["React", "Next.js", "全栈开发", "CSS Modules"]
    };

    // 把这些数据打包成 JSON 格式发回给请求者
    return NextResponse.json(mySecretData);
}