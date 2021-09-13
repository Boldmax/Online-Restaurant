import "./CustomersReview.css";

import Image1 from "../images/pic-1.png";
import Image2 from "../images/pic-2.png";
import Image3 from "../images/pic-3.png";
import Image4 from "../images/pic-4.png";

const CustomersReview = () => {
    return (
        <>
            <section className="review" id="review">

                <h3 className="sub-heading"> customer's review </h3>
                <h1 className="heading"> what they say </h1>

                <div className="swiper-container review-slider">

                    <div className="swiper-wrapper">

                        <div className="swiper-slide slide">
                            <i className="fas fa-quote-right"></i>
                            <div className="user">
                                <img src={Image1} alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                        </div>

                        <div className="swiper-slide slide">
                            <i className="fas fa-quote-right"></i>
                            <div className="user">
                                <img src={Image2} alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                        </div>

                        <div className="swiper-slide slide">
                            <i className="fas fa-quote-right"></i>
                            <div className="user">
                                <img src={Image3} alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                        </div>

                        <div className="swiper-slide slide">
                            <i className="fas fa-quote-right"></i>
                            <div className="user">
                                <img src={Image4} alt="" />
                                <div className="user-info">
                                    <h3>john deo</h3>
                                    <div className="stars">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat consequuntur repellendus aperiam deserunt nihil, corporis fugit voluptatibus voluptate totam neque illo placeat eius quis laborum aspernatur quibusdam. Ipsum, magni.</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default CustomersReview
