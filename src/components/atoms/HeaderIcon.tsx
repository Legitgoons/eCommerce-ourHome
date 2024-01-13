import { ReactNode } from 'react';

interface HeaderIconProps {
  children: ReactNode;
  layout?: string;
}

export default function HeaderIcon({ children, layout }: HeaderIconProps) {
  return (
    <div className={`${layout} flex w-12 items-center md:w-20`}>{children}</div>
  );
}
