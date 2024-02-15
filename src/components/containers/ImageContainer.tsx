import React from 'react';

type Props = {
  children: React.ReactNode;
  classname: string;
};

export default function ImageContainer({ classname, children }: Props) {
  return <div className={classname}>{children}</div>;
}
