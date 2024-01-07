interface CartQuantityControllerProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartQuantityController({
  quantity,
  onIncrease,
  onDecrease,
}: CartQuantityControllerProps) {
  const disabledStyle = quantity === 1 ? 'bg-Secondary' : '';

  return (
    <div className="w-32 h-8 flex justify-between h2h">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity === 1}
        className={`${disabledStyle} w-1/4 border-2`}
      >
        -
      </button>
      <p className="w-1/2 flex items-center justify-center border-y-2">
        {quantity}
      </p>
      <button type="button" onClick={onIncrease} className="w-1/4 border-2">
        +
      </button>
    </div>
  );
}
