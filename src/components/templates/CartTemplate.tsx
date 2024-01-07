import { useEffect, useState } from 'react';

import { useCartState } from '@/contexts/cartContext';

import CartBoxHeader from '../molecules/CartBoxHeader';
import CartBox from '../organisms/CartBox';
import CartPaymentPricing from '../organisms/CartPaymentPricing';
import Header from '../organisms/Header';

export default function CartTemplate() {
  const cart = useCartState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(3000);
  /**
   * Cart의 상태가 변하면 useEffect를 사용해 다시 총 금액을 계산
   * 새로 계산된 값을 기반으로 배송비 설정
   */
  useEffect(() => {
    const newTotalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setTotalPrice(newTotalPrice);

    if (newTotalPrice >= 30000 || newTotalPrice === 0) {
      setShippingFee(0);
    } else {
      setShippingFee(3000);
    }
  }, [cart]);

  const totalAmount = totalPrice + shippingFee;

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-auto">
      <Header currentPage="cart" />
      <ol className="container flex flex-col justify-center">
        <CartBoxHeader />
        {cart.map((item) => (
          <li
            key={item.name}
            className="w-full h-88 md:h-40 flex items-center gap-x-4"
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
