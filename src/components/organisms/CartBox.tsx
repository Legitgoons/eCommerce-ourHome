import { useState } from 'react';

import { useCartDispatch } from '@/contexts/cartContext';
import { CartItem } from '@/types/cart';

import FoodImageBox from '../atoms/FoodImageBox';
import CartBoxPricing from '../molecules/CartBoxPricing';
import CartQuantityController from '../molecules/CartQuantityController';

interface CartBoxProps {
  data: CartItem;
}

export default function CartBox({ data }: CartBoxProps) {
  const { imgSrc, name, price, originalPrice, quantity } = data;
  const [itemQuantity, setItemQuantity] = useState<number>(quantity);
  const dispatch = useCartDispatch();
  const increase = (num: number) => {
    return num + 1;
  };

  const decrease = (num: number) => {
    return num - 1;
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = decrease(itemQuantity);
      setItemQuantity(newQuantity);
      dispatch({ type: 'UPDATE_QUANTITY', itemName: name, newQuantity });
    }
  };

  const increaseQuantity = () => {
    const newQuantity = increase(itemQuantity);
    setItemQuantity(newQuantity);
    dispatch({ type: 'UPDATE_QUANTITY', itemName: name, newQuantity });
  };

  const totalItemPrice = itemQuantity * price;

  return (
    <div className="flex h-full w-full flex-wrap items-center justify-between">
      <div className="flex items-center gap-x-4">
        <FoodImageBox src={imgSrc} name={name} size="sm" />
        <h3 className="h2h">{name}</h3>
      </div>
      <div className="flex w-2/5 justify-between">
        <CartBoxPricing price={price} originalPrice={originalPrice} />
        <CartQuantityController
          quantity={itemQuantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
        <p className="h2h w-1/3">{totalItemPrice.toLocaleString()}원</p>
      </div>
    </div>
  );
}
