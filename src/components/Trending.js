import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const Trending = () => {
  const trending = useSelector((state) => state.trending);
  const nonAdultMovies = trending.filter((movie) => !movie.adult);

  return (
    <div className="lg:pt-20 pb-5 lg:pb-0">
      <div>
        <div>
          <p className="text-white p-3 md:pb-10 md:text-6xl">Top rated</p>
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
                {nonAdultMovies.map((movie) => (
                  <SwiperSlide>
                    <div className="flex-shrink-0">
                      <img
                      loading="lazy"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt={movie.title}
                        className=" w-36 lg:w-96 h-auto bg-gray-200 mr-16 hover:opacity-55 hover:transition-all"
                      />
                      <span className="text-white  text-[9px] lg:text-xl">
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

export default Trending;
