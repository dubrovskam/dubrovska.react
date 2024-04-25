// * Base
import cn from 'classnames';

// * Components
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';

// * Styles
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={cn(styles.container)}>
          {/* * Logo */}
          <Logo />
          <Icon icon="instagram" />
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
