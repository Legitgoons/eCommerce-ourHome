interface FoodImageProps {
  src: string;
}

export default function FoodImage({ src }: FoodImageProps) {
  return (
    <div className="w-72 h-72 flex item-center justify-center border-2">
      <img src={src} />
    </div>
  );
}
