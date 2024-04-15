// * Base
import { useState } from 'react';
import cn from 'classnames';

// * Components
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

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
    <Wrapper>
      <section className={cn(styles.banner)}>
        <h1 style={{ color }}>Your favorite color: {color}</h1>
        <div className={styles.block}>
          <input type="text" onInput={onInputChange} className={styles.input} />

          <Button text={'Add'} onClick={onColorChange} />
          <Button text={'Clean'} onClick={() => setColor('')} />
        </div>
        <div className={styles.content}>Full-width banner image</div>
      </section>
    </Wrapper>
  );
};

export default Banner;
