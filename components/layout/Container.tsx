import classNames from "classnames";
import { FC, PropsWithChildren, HTMLProps } from "react";

export const BasicContainer: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({children, ...rest}) => (
  <div {...rest} className={classNames({
    "my-0 mx-auto": true,
    [rest.className ?? '']: true,
  }) }>
    {children}
  </div>
)
