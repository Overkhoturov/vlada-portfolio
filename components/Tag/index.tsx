import { FC } from "react";
import cn from 'classnames';

type Props = {
  text: string;
  variant?: 'outlined' | 'basic';
}
const Tag: FC<Props> = ({variant = 'basic', text}) => (
  <div className={cn({
    "flex items-center justify-center py-1 px-4 lg:px-6 rounded-[100px] font-medium leading-6 text-primary-on text-body-small-strong": true,
    "bg-surface-container-low ": variant === 'basic'
  })}>
    {text}
  </div>
)

export default Tag;
