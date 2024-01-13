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
    <div className="h2h flex h-8 w-32 justify-between">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity === 1}
        className={`${disabledStyle} w-1/4 border-2`}
      >
        -
      </button>
      <p className="flex w-1/2 items-center justify-center border-y-2">
        {quantity}
      </p>
      <button type="button" onClick={onIncrease} className="w-1/4 border-2">
        +
      </button>
    </div>
  );
}
