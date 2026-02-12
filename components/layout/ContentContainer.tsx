import classNames from "classnames"
import { FC, PropsWithChildren, HTMLProps } from "react"

const ContentContainer: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({children, ...rest}) => {
  return (
    <main
      className={classNames({
        "mt-[120px] relative self-stretch px-4 py-8 bg-surface rounded-tl-[48px] rounded-tr-[48px] flex-col gap-4": true,
        [rest.className ?? '']: true
      })}
      {...rest}
    >
      {children}
    </main>
  )
}

export default ContentContainer;

