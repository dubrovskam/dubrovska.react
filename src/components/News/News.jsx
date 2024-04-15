// * Styles
import styles from './News.module.css';

const News = () => {
  return (
    <div className={styles.news}>
      <div className={styles.blocks}>
        <div className={styles.text}>News</div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
};

export default News;
