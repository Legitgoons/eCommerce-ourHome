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
    <div className="w-full h-28 flex justify-around items-center bg-Tertiary">
      <CartTotalPriceing price={totalPrice} type="TotalAmount" />
      <p className="t2 text-Secondary">+</p>
      <CartTotalPriceing price={shippingFee} type="ShippingFee" />
      <p className="t2 text-Secondary">=</p>
      <CartTotalPriceing price={totalAmount} type="PaymentAmount" />
    </div>
  );
}
