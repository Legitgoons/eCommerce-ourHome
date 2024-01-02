import { ReactNode } from 'react';

interface HeaderIconProps {
  children: ReactNode;
  layout?: string;
}

export default function HeaderIcon({ children, layout }: HeaderIconProps) {
  return (
    <div className={`${layout} w-12 md:w-20 flex items-center`}>{children}</div>
  );
}
