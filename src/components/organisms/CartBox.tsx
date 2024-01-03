import { useCartDispatch } from '@/contexts/cartContext';
import { CartItem } from '@/types/cart';
import { useState } from 'react';

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

  const decreaseQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      dispatch({ type: 'UPDATE_QUANTITY', itemName: name, newQuantity });
    }
  };

  const increaseQuantity = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    dispatch({ type: 'UPDATE_QUANTITY', itemName: name, newQuantity });
  };

  const totalItemPrice = itemQuantity * price;

  return (
    <div className="w-full h-full flex flex-wrap justify-between items-center">
      <div className="flex items-center gap-x-4">
        <FoodImageBox src={imgSrc} name={name} size="sm" />
        <h3 className="h2h">{name}</h3>
      </div>
      <div className="w-2/5 flex justify-between">
        <CartBoxPricing price={price} originalPrice={originalPrice} />
        <CartQuantityController
          quantity={itemQuantity}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
        <p className="w-1/3 h2h">{totalItemPrice.toLocaleString()}원</p>
      </div>
    </div>
  );
}
