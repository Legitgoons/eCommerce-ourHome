import { ReactNode } from 'react';

interface ListCardTagProps {
  bgColor: string;
  children: ReactNode;
}

export default function ListCardTag({ bgColor, children }: ListCardTagProps) {
  return (
    <span
      className={`${bgColor} w-16 h-6 flex justify-center items-center p2s text-white rounded-lg`}
    >
      {children}
    </span>
  );
}
