// * Styles
import LIST from './News.data';
import styles from './News.module.css';

const News = () => {
  return (
    <div className={styles.news}>
      <h3 className={styles.title}>News</h3>
      <ul className={styles.list}>
        {LIST.map((_, index) => (
          <li key={'news-item-' + index} className={styles.item}></li>
        ))}
      </ul>
    </div>
  );
};

export default News;
