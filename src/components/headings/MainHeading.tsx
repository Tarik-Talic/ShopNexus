import { type HeadingProps } from '../types/Heading.types';

export default function MainHeading({ children, classname }: HeadingProps) {
  return <h1 className={classname}>{children}</h1>;
}
