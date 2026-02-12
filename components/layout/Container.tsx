import classNames from "classnames";
import { FC, PropsWithChildren, HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  isHeader?: boolean
}

export const BasicContainer: FC<PropsWithChildren<Props>> = ({children, isHeader=false, ...rest }) => (
  <div {...rest} className={classNames({
    "my-0 mx-auto": true,
    'full-hd:max-w-[1440px] 2k:max-w-[1800px] 4k:max-w-[2160px]': !isHeader,
    [rest.className ?? '']: true,
  }) }>
    {children}
  </div>
)
