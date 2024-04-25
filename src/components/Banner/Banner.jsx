// * Base
import { useState } from 'react';
import cn from 'classnames';

// * Components
import Button from '../Button/Button';
import Field from '../Field/Field';

// * Styles
import styles from './Banner.module.css';

const Banner = () => {
  const [color, setColor] = useState('Enter the color');
  const [inputColor, setInputColor] = useState('');

  const onInputChange = (e) => {
    setInputColor(e.target.value);
  };

  const onColorChange = () => {
    setColor(inputColor);
  };

  return (
    <section className={cn(styles.banner)}>
      <h2 className={styles.title} style={{ color }}>Your favorite color: {color}</h2>
      <div className={styles.block}>
        <Field onChange={onInputChange}/>
        <Button text={'Add'} onClick={onColorChange} />
        <Button text={'Clean'} onClick={() => setColor('')} />
      </div>
      <div className={styles.content}>Full-width banner image</div>
    </section>
  );
};

export default Banner;
