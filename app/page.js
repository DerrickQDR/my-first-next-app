import LikeButton from './LikeButton'; 

export default async function ProfileCard() { 
    

    
    const res = await fetch('https://dummyjson.com/quotes/random', { cache: 'no-store' });
    const data = await res.json();
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px' }}>
            <h1>derrick Wong</h1>
            <p>I am a software engineer</p>
            
            <blockquote style={{ fontStyle: 'italic', color: '#555', borderLeft: '4px solid #ddd', paddingLeft: '10px' }}>
                "{data.quote}" 
                <br />
                <small>— {data.author}</small>
            </blockquote>
            
            <LikeButton />
        </div>
    );
}