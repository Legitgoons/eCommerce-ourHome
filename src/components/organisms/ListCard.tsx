import { ListCardData } from '@/types/apis/listData';
import Cart from '@public/assets/image/cart.svg?react';

import FoodImage from '../atoms/FoodImage';
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

  return (
    <article className="w-72 flex flex-col gap-y-1">
      <FoodImage src={imgSrc} />
      <div className="flex items-start">
        <div className="w-5/6 flex flex-col gap-y-2 items-start text-start">
          {tag === 'best' && <ListCardTag bgColor="bg-Red">베스트</ListCardTag>}
          {tag === 'new' && (
            <ListCardTag bgColor="bg-Orange">신상품</ListCardTag>
          )}
          <h3 className="w-full p1s">{name}</h3>
          <p className="w-full p2s text-Secondary">{detail}</p>
          <ListCardPricing
            price={price}
            orginalPrice={originalPrice}
            discountRate={discountRate}
          />
          {temp === 'cold' && <p className="p2h text-Skyblue">냉장</p>}
          {temp === 'freeze' && <p className="p2h text-Darkblue">냉동</p>}
          {temp === 'normal' && <p className="p2h text-Secondary">실온</p>}
        </div>
        <button className="w-1/6">
          <Cart />
        </button>
      </div>
    </article>
  );
}
