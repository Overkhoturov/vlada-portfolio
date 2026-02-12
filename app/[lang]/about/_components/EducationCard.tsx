import classNames from "classnames";
import { FC } from "react";

type Props = {
  title: string;
  subTitle: string;
  grade: string;
};

const CourseCard: FC<Props> = ({title, subTitle, grade}) => (
  <div className={classNames({
    "flex flex-col gap-1 p-4 rounded-3xl bg-surface-container-low min-w-[49%]": true,
  })} >
    <h3 className="text-body-medium-strong">{title}</h3>
    <span>{subTitle}</span>
    <span className="text-body-medium-strong">{grade}</span>
  </div>
)

export default CourseCard;
