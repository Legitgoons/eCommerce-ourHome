import { ReactNode } from 'react';

interface HeaderIconProps {
  children: ReactNode;
  styles?: string;
}

export default function HeaderIcon({ children, styles }: HeaderIconProps) {
  return (
    <div className={`${styles} w-12 md:w-20 flex items-center`}>{children}</div>
  );
}
