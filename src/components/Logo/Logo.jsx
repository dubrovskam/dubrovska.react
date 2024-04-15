// * Styles
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a className={styles.logo}>
      <img src="/logo.png" alt="Logo" />
    </a>
  );
};

export default Logo;
