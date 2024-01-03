type PriceType = 'TotalAmount' | 'ShippingFee' | 'PaymentAmount';

interface CartTotalPriceProps {
  type: PriceType;
  price: number;
}

export default function CartTotalPriceing({
  type,
  price,
}: CartTotalPriceProps) {
  let text;
  if (type === 'TotalAmount') {
    text = '총 금액';
  } else if (type === 'ShippingFee') {
    text = '배송비';
  } else if (type === 'PaymentAmount') {
    text = '결제 금액';
  }

  return (
    <span className="flex items-end gap-x-4">
      <p className="p1s">{text}</p>
      <span className="flex items-end">
        <p className="t2">{price.toLocaleString()}원</p>
        {type === 'ShippingFee' && (
          <p className="p1s text-Secondary">(3만원이상 구매 시 무료배송)</p>
        )}
      </span>
    </span>
  );
}
