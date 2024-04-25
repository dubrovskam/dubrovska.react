// * Base
import { Outlet } from 'react-router-dom';

//  * Component
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      {/* * Header */}
      <Header />
      {/* Pages */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
