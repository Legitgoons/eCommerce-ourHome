import { ReactNode } from 'react';

interface HeaderIconProps {
  children: ReactNode;
}

export default function HeaderIcon({ children }: HeaderIconProps) {
  return (
    <div className="w-12 mx-6 md:w-20 md:mx-12 flex items-center">
      {children}
    </div>
  );
}
