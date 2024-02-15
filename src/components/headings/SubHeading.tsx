import { type HeadingProps } from '../types/Heading.types';

export default function SubHeading({ children, as, classname }: HeadingProps) {
  const Element = as || 'h2';
  return <Element className={classname}>{children}</Element>;
}
