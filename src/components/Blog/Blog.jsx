// * Styles
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.blocks}>
        <h3 className={styles.text}>Blog</h3>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
};

export default Blog;
