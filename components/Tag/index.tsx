import { FC } from "react";
import cn from "classnames";

type Props = {
  text: string;
  variant?: "primary" | "secondary";
};
const Tag: FC<Props> = ({ variant = "primary", text }) => (
  <div
    className={cn({
      "flex items-center justify-center py-1 px-4 lg:px-6 rounded-full text-body-small-strong": true,
      "bg-surface-container-low text-primary": variant === 'secondary',
      "bg-secondary-fixed-opacity-4 text-secondary-fixed": variant === 'primary',
    })}
  >
    {text}
  </div>
);

export default Tag;
