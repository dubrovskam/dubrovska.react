/* eslint-disable react/prop-types */
// * Styles
import DATA from './Navigation.data';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {DATA.map(({ title, id }) => (
          <Item title={title} key={`list item ${id}`} />
        ))}
      </ul>
    </nav>
  );
};

const Item = ({ title }) => {
  return (
    <li className={styles.item}>
      <a href="#" className={styles.link}>
        {title}
      </a>
    </li>
  );
};

export default Navigation;
