import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          Leetcode Functions
        </h1>
        <ul>
          <li>
            Needle in Haystack
          </li>
          <li>
            Remove Element
          </li>
        </ul>
      </main>
      <footer className={styles.footer}>
         
      </footer>
    </div>
  );
}
