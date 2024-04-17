// * Styles
import LIST from './Blog.data';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.blog}>
      <h3 className={styles.title}>Blog</h3>
      <ul className={styles.list}>
        {LIST.map((_, index) => (
          <li key={'blog-item-' + index} className={styles.item}></li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
