/* eslint-disable react/prop-types */
// * Base
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// * Styles
import styles from './List.module.css';

const Wether = async () => {
  const [list, setList] = useState([]);

  const getList = useCallback(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=London&appid=cb0e66767f222cfdf796a366a1f9b959'
      )
      .then((response) => {
        console.log('response: ', response);
        setList(response);
      });
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <ul className={styles.list}>
      {list.map(({ title, id }) => (
        <Item title={title} key={`list item ${id}`} />
      ))}
    </ul>
  );
};

const Item = ({ title }) => {
  return (
    <li className={styles.item}>
      <h3>{title}</h3>
    </li>
  );
};

export default Wether;
