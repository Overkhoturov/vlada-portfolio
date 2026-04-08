import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { FC, PropsWithChildren, ReactNode, useContext } from "react";
import classNames from "classnames";

type Props = {
  items: ReactNode[];
};
const ProjectSwiper: FC<Props> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={8}
      slidesPerView={1.1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides
      className="w-full !py-4"
    >
      {items.map((item, index) => (
        <SwiperSlide
          className={classNames({
            "w-[340px] min-h-[628px]": true,
          })}
          key={index}
        >
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
