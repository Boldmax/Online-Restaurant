import "./TopSlider.css";

/* import { Swiper, SwiperSlide } from "swiper/react/swiper-slide"; */
/* import 'swiper/react'; */

import Image1 from "../images/home-img-1.png";
import Image2 from "../images/home-img-2.png";
import Image3 from "../images/home-img-3.png";

const TopSlider = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="swiper-container home-slider">
                    <div className="swiper-wrapper wrapper">
                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>spicy noodles</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <a href="#" className="btn">order now</a>
                            </div>
                            <div className="image">
                                <img src={Image1} alt="" />
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>fried chicken</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <a href="#" className="btn">order now</a>
                            </div>
                            <div className="image">
                                <img src={Image2} alt="" />
                            </div>
                        </div>

                        <div className="swiper-slide slide">
                            <div className="content">
                                <span>our special dish</span>
                                <h3>hot pizza</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus dolor cumque?</p>
                                <a href="#" className="btn">order now</a>
                            </div>
                            <div className="image">
                                <img src={Image3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section>
        </>
    )
}

export default TopSlider;