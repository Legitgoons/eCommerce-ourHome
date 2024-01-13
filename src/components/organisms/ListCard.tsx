import Cart from '@public/assets/image/cart.svg?react';

import { useCartDispatch } from '@/contexts/cartContext';
import { ListCardData } from '@/types/apis/listData';
import { CartItem } from '@/types/cart';

import FoodImageBox from '../atoms/FoodImageBox';
import ListCardTag from '../atoms/ListCardTag';
import ListCardPricing from '../molecules/ListCardPricing';

interface ListCardProps {
  data: ListCardData;
}

export default function ListCard({ data }: ListCardProps) {
  const {
    imgSrc,
    name,
    detail,
    tag,
    price,
    originalPrice,
    discountRate,
    temp,
  } = data;
  const addToCart = useCartDispatch();

  const convertToCartItem = (itemData: ListCardData): CartItem => {
    return {
      imgSrc: itemData.imgSrc,
      name: itemData.name,
      price: itemData.price,
      originalPrice: itemData.originalPrice || undefined,
      quantity: 1,
    };
  };

  const cartHandler = (itemData: ListCardData) => {
    // eslint-disable-next-line no-alert
    window.alert(`장바구니에 ${name}이 담겼습니다.`);
    const cartItem = convertToCartItem(itemData);
    addToCart({ type: 'ADD_TO_CART', item: cartItem });
  };

  return (
    <article className="flex w-72 flex-col gap-y-1">
      <FoodImageBox src={imgSrc} name={name} />
      <div className="flex items-start">
        <div className="flex w-5/6 flex-col items-start gap-y-2 text-start">
          {tag === 'best' && <ListCardTag bgColor="bg-Red">베스트</ListCardTag>}
          {tag === 'new' && (
            <ListCardTag bgColor="bg-Orange">신상품</ListCardTag>
          )}
          <h3 className="p1s w-full">{name}</h3>
          <p className="p2s w-full text-Secondary">{detail}</p>
          <ListCardPricing
            price={price}
            orginalPrice={originalPrice}
            discountRate={discountRate}
          />
          {temp === 'cold' && <p className="p2h text-Skyblue">냉장</p>}
          {temp === 'freeze' && <p className="p2h text-Darkblue">냉동</p>}
          {temp === 'normal' && <p className="p2h text-Secondary">실온</p>}
        </div>
        <button
          type="button"
          className="w-1/6"
          onClick={() => cartHandler(data)}
          aria-label="cartHandler"
        >
          <Cart />
        </button>
      </div>
    </article>
  );
}
