import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={rocket} width={22} />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
}
