interface CartBoxPricingProps {
  price: number;
  originalPrice?: number;
}

export default function CartBoxPricing({
  price,
  originalPrice,
}: CartBoxPricingProps) {
  return (
    <div className="flex w-1/3 flex-col">
      <p className="h2h">{price.toLocaleString()}원</p>
      {originalPrice && (
        <s className="p1h text-Secondary">{originalPrice.toLocaleString()}원</s>
      )}
    </div>
  );
}
