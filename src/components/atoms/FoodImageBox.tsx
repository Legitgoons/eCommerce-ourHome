interface FoodImageBoxProps {
  src: string;
  name: string;
  size?: 'lg' | 'sm';
}

export default function FoodImageBox({
  src,
  name,
  size = 'lg',
}: FoodImageBoxProps) {
  const boxSize = size === 'lg' ? 'w-72 h-72' : 'w-32 h-32';

  return (
    <div className={`${boxSize} flex items-center justify-center border-2`}>
      <img src={src} alt={name} />
    </div>
  );
}
