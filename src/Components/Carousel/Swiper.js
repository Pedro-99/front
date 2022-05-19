import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./Style.css";
const SwiperC = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      speed={400}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}

      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div>
          <div className="card bg-dark text-white border-0">
            <img src="/assests/m7.png" className="card-img" alt="background" />
            <div className='carousel-caption'>
              <div id='swiper' className="d-flex flex-column justify-content-left align-self-left">
                <div className='container'>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className="d-block w-100"
            src="./assests/m3.png"
            alt="First slide"
          />
          <div class="carousel-caption">
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                <p className="card-text lead fs-2">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="d-block w-100"
          src="./assests/m4.png"
          alt="First slide"
        />
        <div id='swiper' class="carousel-caption">
          <h1 class="mb-4">BEST OFFERS</h1>
          <h5 class="mb-5">DISCOVER MORE OFFERS GET THE BEST SOLUTION FOR YOUR PROBLEMS.</h5>
          <button class="btn btn-light mr-3">Read More</button>
          {/* <a class="btn btn-white" href="#contact">Contact</a> */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="d-block w-100"
          src="./assests/m2.png"
          alt="First slide"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperC;