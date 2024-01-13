import { useCartState } from '@/contexts/cartContext';
import { CartItem } from '@/types/cart';

import CartBoxHeader from '../molecules/CartBoxHeader';
import CartBox from '../organisms/CartBox';
import CartPaymentPricing from '../organisms/CartPaymentPricing';
import Header from '../organisms/Header';

const calculateTotalPrice = (cart: CartItem[]) =>
  cart.reduce((total, item) => total + item.price * item.quantity, 0);

const calculateShippingFee = (totalPrice: number) =>
  totalPrice >= 30000 || totalPrice === 0 ? 0 : 3000;

export default function CartTemplate() {
  const cart = useCartState();

  const totalPrice = calculateTotalPrice(cart);
  const shippingFee = calculateShippingFee(totalPrice);
  const totalAmount = totalPrice + shippingFee;

  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-auto">
      <Header currentPage="cart" />
      <ol className="container flex flex-col justify-center">
        <CartBoxHeader />
        {cart.map((item) => (
          <li
            key={item.name}
            className="flex h-80 w-full items-center gap-x-4 md:h-40"
          >
            <CartBox data={item} />
          </li>
        ))}
        <CartPaymentPricing
          totalPrice={totalPrice}
          shippingFee={shippingFee}
          totalAmount={totalAmount}
        />
      </ol>
    </div>
  );
}
