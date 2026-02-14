import { FC } from "react";

type Props = {
  title: string;
  items: string[];
};

const ListItems: FC<Props> = ({ title, items }) => {
  return (
    <div className="text-primary text-body-medium">
      <h2 className="pl-6 text-headline-extra-small-strong">{title}</h2>
      <ul className="pl-3 marker:content-['•'] list-disc">
        {items.map((item, index) => (
          <li className="pl-3 text-body-medium" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
