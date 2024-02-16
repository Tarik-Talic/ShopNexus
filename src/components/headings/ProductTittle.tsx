import { type HeadingProps } from '../types/Heading.types';
export default function ProductTittle({
  children,
  classname,
  as,
}: HeadingProps) {
  const Element = as || 'p';
  return <Element className={classname}>{children}</Element>;
}
