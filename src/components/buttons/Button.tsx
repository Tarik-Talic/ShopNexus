import { Children } from 'react';

type Props = {
  children: React.ReactNode;
  classname: string;
  onClick: () => void;
  disabled?: boolean;
};

export default function Button({ children, classname, onClick }: Props) {
  return (
    <button onClick={onClick} className={classname}>
      {children}
    </button>
  );
}
