interface ListCardPriceProps {
  price: number;
  orginalPrice?: number;
  discountRate?: number;
}

export default function ListCardPrice({
  price,
  orginalPrice,
  discountRate,
}: ListCardPriceProps) {
  return (
    <div className="flex items-end gap-x-1">
      <strong className="h1h">{price.toLocaleString()}원</strong>
      {orginalPrice && (
        <s className="p1h text-Secondary">{orginalPrice.toLocaleString()}원</s>
      )}
      {discountRate && <p className="p1h text-Orange">{discountRate}%</p>}
    </div>
  );
}
