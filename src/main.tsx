import React from 'react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import './App.css';
import { CartProvider } from './contexts/cartContext';
import './index.css';
import CartPage from './pages/CartPage';
import ListPage from './pages/ListPage';

const router = createBrowserRouter([
  { path: '/', element: <ListPage /> },
  { path: '/cart', element: <CartPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartProvider>
);
