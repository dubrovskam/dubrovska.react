// * Base
import cn from 'classnames';

// * Components
import Blog from '../Blog/Blog';
import News from '../News/News';
// import List from '../List/List';
import Weather from '../Weather/Weather';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

// * Styles
import styles from './Main.module.css';
import Wrapper from '../Wrapper/Wrapper';

const Main = () => {
  return (
    <main>
      <Wrapper>
        <div className={cn(styles.block)}>
          <Blog />
          <News />
        </div>
        {/* <List /> */}
        <Weather />
        <RegistrationForm />
      </Wrapper>
    </main>
  );
};

export default Main;
