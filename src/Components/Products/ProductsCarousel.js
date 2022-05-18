import { Swiper, SwiperSlide } from 'swiper/react';
import LastestProducts from "./LastestProducts";
import "./LastestProducts.css"
import 'swiper/css';
const Title = () =>{
    return(
        <div>
        <div className="container py-5">
            <div className="row">
                <div className="col-12 ">
                    <h1 className="display-6 fw-bolder text-center">latest Products</h1>
                    <hr />
                </div>
            </div>
            </div>
            </div>
    );
}

const Card = () =>{
    return(
        <div id='products' className="product-grid">
            <div className="product-image">
                <a href="#" className="image">
                    <img src="/assests/B.png" className="img-1" />
                    <img src="/assests/m.png" className="img-2" />
                </a>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star disable"></li>
                    <li class="disable">(1 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Women's Blouse Top</a></h3>
                <div class="price">$65.99</div>
            </div>
        </div>

    );
}
const ProCaros = () => {
  return (
      <>
      <Title />
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
          <Card />
      </SwiperSlide>
      <SwiperSlide>
          <Card />
      </SwiperSlide>
      <SwiperSlide>
      <Card />
      </SwiperSlide>
      <SwiperSlide>
      <Card />
      </SwiperSlide>
    </Swiper>

    </>
  );
};

export default ProCaros;