import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './Home.module.css';
export default function Home(){
  useDocumentTitle('Tide Pools · Home');
  return (
    <section>
      <h1 tabIndex={-1}>Welcome to Tide Pools</h1>
      <p className={styles.hero}>
        Explore accessible React patterns, from routing focus to dialogs and ARIA widgets.
      </p>
    </section>
  );
}
