import { Link } from 'react-router-dom';

import Cart from '@public/assets/image/cart.svg?react';
import Logo from '@public/assets/image/logo.svg?react';
import Shop from '@public/assets/image/shop.svg?react';

import { CurrentPage } from '@/types/header';

import HeaderIcon from '../atoms/HeaderIcon';

interface HeaderProps {
  currentPage: CurrentPage;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="w-full h-16 md:h-28 flex justify-between border-b-2">
      <HeaderIcon layout="mx-6 my-2 md:mx-12 md:my-3">
        <Logo />
      </HeaderIcon>
      <HeaderIcon layout="mx-6 my-2 md:mx-12 md:my-3">
        {currentPage === 'list' && (
          <Link to="/cart">
            <Cart />
          </Link>
        )}
        {currentPage === 'cart' && (
          <Link to="/">
            <Shop />
          </Link>
        )}
      </HeaderIcon>
    </header>
  );
}
