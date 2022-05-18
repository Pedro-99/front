import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Style.css";
const SwiperC = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div id='swiper' className="">
            <div className="hero">
              <div className="card bg-dark text-white border-0">
                <img src="/assests/m2.png" className="card-img" alt="background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="container text-color">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <img
          className="d-block w-100"
          src="./assests/m3.png"
          alt="First slide"
        />
      </SwiperSlide>
      <SwiperSlide>
      <img
          className="d-block w-100"
          src="./assests/m4.png"
          alt="First slide"
        />
      </SwiperSlide>
      <SwiperSlide>
      <img
          className="d-block w-100"
          src="./assests/m2.png"
          alt="First slide"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SwiperC;