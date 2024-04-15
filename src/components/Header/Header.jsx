// * Base
import cn from 'classnames';

// * Components
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import Wrapper from '../Wrapper/Wrapper';

// * Styles
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={cn(styles.container)}>
          {/* * Logo */}
          <Logo />

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
