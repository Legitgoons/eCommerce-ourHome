import { CurrentPage } from '@/types/Header';
import Cart from '@public/assets/image/cart.svg?react';
import Logo from '@public/assets/image/logo.svg?react';
import Shop from '@public/assets/image/shop.svg?react';
import { Link } from 'react-router-dom';

import HeaderIcon from '../atoms/HeaderIcon';

interface HeaderProps {
  currentPage: CurrentPage;
}

export default function Header({ currentPage }: HeaderProps) {
  return (
    <header className="w-full h-16 md:h-28 flex justify-between border-b-2">
      <HeaderIcon styles="mx-6 md:mx-12">
        <Logo />
      </HeaderIcon>
      <HeaderIcon styles="mx-6 md:mx-12">
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
