
import LikeButton from './LikeButton'; 
import styles from './page.module.css';
export default async function ProfileCard() { 
    const res = await fetch('https://dummyjson.com/quotes/random', { cache: 'no-store' });
    const data = await res.json();
    
    return (
        <div className={styles.card}>
            <h1 className={styles.nameTitle}>derrick Wong</h1>
            <p>I am a software engineer</p>
            
            <blockquote className={styles.quoteBox}>
                "{data.quote}" 
                <br />
                <small>— {data.author}</small>
            </blockquote>
            
            <LikeButton />
        </div>
    );
}