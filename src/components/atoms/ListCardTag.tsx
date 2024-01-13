import { ReactNode } from 'react';

type CardTagBgColor = 'bg-Red' | 'bg-Orange';

interface ListCardTagProps {
  bgColor: CardTagBgColor;
  children: ReactNode;
}

export default function ListCardTag({ bgColor, children }: ListCardTagProps) {
  return (
    <span
      className={`${bgColor} p2s flex h-6 w-16 items-center justify-center rounded-lg text-white`}
    >
      {children}
    </span>
  );
}
