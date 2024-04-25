// * Base
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// * Routes
import router from './routes';

// * Styles
import './styles/normalize.css';
import './styles/index.css';

// * Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
