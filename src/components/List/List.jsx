/* eslint-disable react/prop-types */
// * Styles
import LIST from './List.data';
import styles from './List.module.css';

const List = () => {
  return (
    <ul className={styles.list}>
      {LIST.map(({ description, title, id }) => (
        <Item title={title} description={description} key={`list item ${id}`} />
      ))}
    </ul>
  );
};

const Item = ({ title, description }) => {
  return (
    <li className={styles.item}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default List;
