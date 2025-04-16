import styles from "./page.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
      <ul className={styles.list}>
        <Link href="/static">Static route</Link>
        <Link href="/dynamic/1">Dynamic route</Link>
      </ul>
    </div>




  )
}
