// * Base
import cn from 'classnames';

// * Components
import Blog from '../Blog/Blog';
import News from '../News/News';
// import List from '../List/List';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

// * Styles
import styles from './Main.module.css';

const Main = () => {
  return (
    <main>
        <div className={cn(styles.block)}>
          <Blog />
          <News />
        </div>
        {/* <List /> */}
        
        <RegistrationForm />
    </main>
  );
};

export default Main;
