import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Popular = () => {
  const movies = useSelector((state) => state.popular);

  return (
    <div className="pt-20">
      <div>
        <div>
          <p className="text-white p-3 md:pb-10 md:text-6xl">Popular</p>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center ">
          <div className="overflow-x-auto whitespace-no-wrap ml-[5%] mr-[5%]">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              scrollbar={{ draggable: true }}
              navigation={true}
              modules={[Navigation]}
            >
              <div className="flex flex-no-wrap">
                {movies.map((movie) => (
                  <SwiperSlide>
                    <div className="flex-shrink-0">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                        className=" w-36 lg:w-96 h-auto bg-gray-200 mr-16 hover:opacity-55 hover:transition-all"
                      />
                      <span className="text-white text-[9px] lg:text-xl">
                        {movie.title}
                      </span>
                    </div>
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

export default Popular;
