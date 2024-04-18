import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Trending = () => {
  const trending = useSelector((state) => state.trending.trending);

  return (
    <div className="lg:pt-20 pb-5 lg:pb-0">
      <div>
        <div>
          <p className="text-white p-3 md:pb-10 md:text-6xl">Top rated</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <div className="overflow-x-auto whitespace-no-wrap ml-[5%] mr-[5%]">
            <div className="flex flex-no-wrap"></div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              navigation={true}
              modules={[Navigation]}
            >
              <div className="flex flex-no-wrap">
                {trending.map((movie) => (
                  <SwiperSlide>
                    <MovieCard movie={movie} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
