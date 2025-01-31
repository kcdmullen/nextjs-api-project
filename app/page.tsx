import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Knox APIs</h1>
        <ol>
          <li>
            <Link href='/dashboard'>Purchase orders</Link>
          </li>
          <li>
            <Link href='/dashboard/about'>Election notices</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
