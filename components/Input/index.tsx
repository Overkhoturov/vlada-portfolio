import { FC, HTMLProps } from "react";
import classNames from "classnames";
import { StyledInput } from "./index.style";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  disabled?: boolean;
  onKeyDown?: HTMLProps<HTMLInputElement>["onKeyDown"];
  className?: HTMLProps<HTMLElement>["className"];
};

const Input: FC<Props> = ({
  value,
  onChange,
  placeholder,
  helperText,
  errorText,
  disabled,
  onKeyDown,
  className = "",
}) => {
  const hasError = Boolean(errorText);

  return (
    <div className={classNames("flex flex-col gap-2", className)}>
      <StyledInput
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        onChange={(e) => onChange(e.target.value)}
        className={classNames({
          "w-full p-4 rounded-2xl border text-body-medium text-primary transition-all duration-300 ease-out":
            true,
          "bg-surface-container-low placeholder:text-tertiary-on-fixed": true,
          "border-outline focus:border-primary": !hasError,
          "border-red-500 focus:border-red-500": hasError,
          "opacity-50 cursor-not-allowed": disabled,
        })}
      />
      {(helperText || errorText) && (
        <span
          className={classNames("text-body-small-strong", {
            "text-tertiary-on-fixed": !hasError,
            "text-red-500": hasError,
          })}
        >
          {errorText || helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
