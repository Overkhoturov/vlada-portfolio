import { FC, ReactNode, useContext } from "react";
import { StyledButton } from "./index.style";
import classNames from "classnames";
import { ThemeContext } from "@/utils/providers/theme-provider";

type Props = {
  text?: string;
  icon?: ReactNode;
  variant: 'outlined' | 'filled' | 'ghost';
  type: 'primary' | 'secondary';
  size: 'lg' | 'md';
  disabled?: boolean;
  onClick?: () => void;
  className?: string
}

const Button: FC<Props> = ({text, icon, type, variant, disabled, onClick, className = ''}) => {
  const {isDark} = useContext(ThemeContext);

  return (
    <StyledButton onClick={onClick} disabled={disabled} className={classNames({
        'p-4 flex gap-2 items-center justify-center rounded-2xl bg-transparent cursor-pointer transition-all duration-300 ease-out': true,
        'bg-secondary-400 text-primary-100 hover:bg-primary-700 active:bg-primary-800 disabled:bg-primary-500':
          type === 'primary' && variant === 'filled',
        'border': variant === 'outlined',
        'border-primary-700 text-primary-700 hover:border-primary-900 hover:text-primary-900 disabled:border-primary-500 disabled:text-primary-500':
          type === 'secondary' && variant === 'outlined' && !isDark,
        'text-primary-700 hover:text-primary-900 disabled:text-primary-500':
          type === 'secondary' && variant === 'ghost' && !isDark,
        'border-primary-100 text-primary-100 hover:border-primary-400 hover:text-primary-400 disabled:border-primary-500 disabled:text-primary-500':
          type === 'secondary' && variant === 'outlined' && isDark,
        'text-primary-100 hover:text-primary-400 disabled:text-primary-500':
          type === 'secondary' && variant === 'ghost' && isDark,
          [className]: true,
      })}>
      {icon && (
        <div className="w-6 h-6">
          {icon}
        </div>
      )}
      {text && (
        <span className="text-body-medium-strong">
          {text}
        </span>
      )}
    </StyledButton>
  ) 
}

export default Button;
