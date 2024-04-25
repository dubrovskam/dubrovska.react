// * Base
import { Link } from 'react-router-dom';
import cn from 'classnames';

// * Components
import Navigation from '../Navigation/Navigation';
import Wrapper from '../Wrapper/Wrapper';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

// * Styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={cn(styles.container)}>
          {/* * Logo */}
          <Logo />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/weather">Weather</Link>
          {/* * Navigation */}
          <Navigation />

          {/* * Buttons */}
          <div className={styles.button}>
            <Button text={'Sign In'} color={'orange'} />
            <Button text={'Sign Up'} />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
