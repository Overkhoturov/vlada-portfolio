import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { FC, ReactNode } from "react";

type Props = {
  items: ReactNode[];
};

const ProjectSwiper: FC<Props> = ({ items }) => (
  <Swiper
    spaceBetween={8}
    slidesPerView={1.1}
    centeredSlides
    className="w-full !py-4"
  >
    {items.map((item, index) => (
      <SwiperSlide className="w-[340px] min-h-[628px]" key={index}>
        {item}
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProjectSwiper;
