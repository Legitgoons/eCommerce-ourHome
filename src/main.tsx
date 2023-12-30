import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import './index.css';
import CartPage from './pages/CartPage.tsx';
import ListPage from './pages/ListPage.tsx';

const router = createBrowserRouter([
  { path: '/', element: <ListPage /> },
  { path: '/cart', element: <CartPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
