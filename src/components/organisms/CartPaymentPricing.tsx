import CartTotalPriceing from '../molecules/CartTotalPriceing';

interface CartPaymentPricingProps {
  totalPrice: number;
  shippingFee: number;
  totalAmount: number;
}

export default function CartPaymentPricing({
  totalPrice,
  shippingFee,
  totalAmount,
}: CartPaymentPricingProps) {
  return (
    <div className="flex h-28 w-full items-center justify-around bg-Tertiary">
      <CartTotalPriceing price={totalPrice} type="TotalAmount" />
      <p className="t2 text-Secondary">+</p>
      <CartTotalPriceing price={shippingFee} type="ShippingFee" />
      <p className="t2 text-Secondary">=</p>
      <CartTotalPriceing price={totalAmount} type="PaymentAmount" />
    </div>
  );
}
