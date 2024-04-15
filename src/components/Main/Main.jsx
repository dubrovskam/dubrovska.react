// * Base
import cn from 'classnames';

// * Components
import Blog from '../Blog/Blog';
import News from '../News/News';
import List from '../List/List';

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
        <List />
      </Wrapper>
    </main>
  );
};

export default Main;
