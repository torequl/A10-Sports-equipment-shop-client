// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../CSS/styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Slide } from 'react-awesome-reveal';

const Slider = () => {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div
                        className="hero min-h-[90vh]"
                        style={{
                            backgroundImage: "url(https://gymtek-store-demo.myshopify.com/cdn/shop/files/slideshow-v4-1.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div>
                                <Slide direction='left'>
                                <h1 className="mb-5 text-2xl md:text-6xl font-extrabold">TRY YOUR BEST</h1>
                                </Slide>
                                <Slide direction='right'>
                                <button className="btn btn-primary mt-5">Get Started</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div
                        className="hero min-h-[90vh]"
                        style={{
                            backgroundImage: "url(https://gymtek-store-demo.myshopify.com/cdn/shop/files/slideshow-v4-2.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div>
                                <Slide direction='left'>
                                <h1 className="mb-5 text-2xl md:text-6xl uppercase font-extrabold">Sports fashion</h1>
                                </Slide>
                                <Slide direction='right'>
                                <button className="btn btn-primary mt-5">SHOP NOW</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                <SwiperSlide>
                    <div
                        className="hero min-h-[90vh]"
                        style={{
                            backgroundImage: "url(https://demo1.leotheme.com/bos_gymgear_demo/themes/bos_gymgear/assets/img/modules/leoslideshow/slide_1.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-10"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div>
                                <Slide direction='left'>
                                <h1 className="mb-5 text-2xl md:text-6xl uppercase font-extrabold">Make Your Body Fit & Strong</h1>
                                </Slide>
                                <Slide direction='right'>
                                <button className="btn btn-primary mt-5">Get Started</button>
                                </Slide>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;