import React from 'react';

type HamButtonProps = {
  children: React.ReactNode;
  classname: string;
  onClick: () => void;
};

export default function HamButton({
  children,
  classname,
  onClick,
}: HamButtonProps) {
  return (
    <div className={classname} onClick={onClick}>
      {children}
    </div>
  );
}
