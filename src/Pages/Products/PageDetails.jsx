import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./PageDetails.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import PageDetailsLayout from "../../Layouts/PageDetailsLayout";

const PageDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    return (
<>
  {/* <HomeLayout> */}
  <PageDetailsLayout >
        <section className="mt-5 py-4">
                  
        <div id="details" className="container mt-5 mb-5">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "#fff",
                                    "--swiper-pagination-color": "#fff",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                <SwiperSlide>
                                    <img src="/assests/frontpro1.jpeg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/backpro1.jpeg" />
                                </SwiperSlide>

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src="/assests/frontpro1.jpeg" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="/assests/backpro1.jpeg" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title mb-3">Products Title</h3>
                            <div className="rating mb-5">
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                                <span className="review-no">41 reviews</span>
                            </div>
                            <p className="product-description"> Products Description = 
                            Suspendisse quos? Tempus cras iure temporibus? 
                            Eu laudantium cubilia sem sem!.</p>
                            <h4 className="price">current price: <span>$180</span></h4>
                            <p className="vote mb-4 mt-2"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                            <h5 className="sizes mb-5">sizes:
                                <span className="size" data-toggle="tooltip" title="small">s</span>
                                <span className="size" data-toggle="tooltip" title="medium">m</span>
                                <span className="size" data-toggle="tooltip" title="large">l</span>
                                <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                            </h5>
                            <div className="action d-flex w-20 h-20">
                                <button className="add-to-cart btn btn-default ms-2" type="button">add to cart</button>
                                <button className="like btn btn-default ms-3" type="button"><span className="fa fa-heart"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <h5>Discover Products</h5>
        </div>
               
        </section>
        </PageDetailsLayout>
         {/* </HomeLayout> */}
        </>
    );
}

export default PageDetails;



{/* <section className="mt-5 py-4">
<div id="details" className="container mt-5 mb-5">
    <div className="card">
        <div className="container-fliud">
            <div className="wrapper row">
                <div className="preview col-md-6">

                </div>
                <div className="details col-md-6">
                    <h3 className="product-title mb-3">Products Title</h3>
                    <div className="rating mb-5">
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description"> Products Description =
                        Suspendisse quos? Tempus cras iure temporibus?
                        Eu laudantium cubilia sem sem!.</p>
                    <h4 className="price">current price: <span>$180</span></h4>
                    <p className="vote mb-4 mt-2"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                    <h5 className="sizes mb-5">sizes:
                        <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5>
                    <div className="action d-flex w-20 h-20">
                        <button className="add-to-cart btn btn-default ms-2" type="button">add to cart</button>
                        <button className="like btn btn-default ms-3" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}

{/* <div className="row">                                
<Swiper
style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
}}
spaceBetween={10}
navigation={true}
thumbs={{ swiper: thumbsSwiper }}
modules={[FreeMode, Navigation, Thumbs]}
className="mySwiper2"
>
<SwiperSlide>
    <img src="/assests/frontpro1.jpeg" />
</SwiperSlide>
<SwiperSlide>
    <img src="/assests/backpro1.jpeg" />
</SwiperSlide>

</Swiper>
</div>
<div>
<Swiper
onSwiper={setThumbsSwiper}
spaceBetween={10}
slidesPerView={4}
freeMode={true}
watchSlidesProgress={true}
modules={[FreeMode, Navigation, Thumbs]}
className="mySwiper"
>
<SwiperSlide>
    <img src="/assests/frontpro1.jpeg" />
</SwiperSlide>
<SwiperSlide>
    <img src="/assests/backpro1.jpeg" />
</SwiperSlide>
</Swiper>
</div> */}