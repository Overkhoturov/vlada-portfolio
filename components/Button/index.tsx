import { FC, HTMLProps, ReactNode } from "react";
import { StyledButton } from "./index.style";
import classNames from "classnames";

type Props = {
  text?: string;
  icon?: ReactNode;
  variant: "outlined" | "filled" | "ghost";
  type: "primary" | "secondary";
  size: "lg" | "md";
  disabled?: boolean;
  onClick?: () => void;
  className?: HTMLProps<HTMLElement>["className"];
};

const Button: FC<Props> = ({
  text,
  icon,
  type,
  variant,
  disabled,
  onClick,
  className = "",
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={classNames({
        "p-4 flex gap-2 items-center justify-center rounded-2xl bg-transparent cursor-pointer transition-all duration-300 ease-out": true,
        "bg-secondary-container-fixed text-primary-inverse-fixed hover:bg-primary-fixed active:bg-primary-fixed disabled:bg-tertiary-fixed":
          type === "primary" && variant === "filled",

        border: variant === "outlined",
        "border-primary text-primary hover:border-primary-on-variant hover:text-primary-on-variant active:text-primary-on-variant active:border-primary-on-variant disabled:border-tertiary-on-fixed disabled:text-tertiary-on-fixed":
          type === "secondary" && variant === "outlined",

        "text-primary hover:text-primary-on-variant active:text-primary-on-variant disabled:text-tertiary-on-fixed":
          type === "secondary" && variant === "ghost",
        [className]: true,
      })}
    >
      {icon && <div className="w-6 h-6">{icon}</div>}
      {text && <span className="text-body-medium-strong">{text}</span>}
    </StyledButton>
  );
};

export default Button;
