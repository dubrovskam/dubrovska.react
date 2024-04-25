/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// * Base
import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// * Components
import Loading from './components/Loading/Loading';
import App from './App';

// * Pages
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Error = lazy(() => import('./pages/Error/Error'));
const WeatherPage = lazy(() => import('./pages/WeatherPage/WeatherPage'));

// * Element
const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Home />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/weather',
        element: <Element component={<WeatherPage />} />,
      },
      {
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default router;
