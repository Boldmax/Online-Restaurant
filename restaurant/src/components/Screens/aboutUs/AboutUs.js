import "./AboutUs.css";

import Image1 from "../images/about-img.png";

const AboutUs = () => {
    return (
        <>
            <section className="about" id="about">
                <h3 className="sub-heading"> about us </h3>
                <h1 className="heading"> why choose us? </h1>
                <div className="row">

                    <div className="image">
                        <img src={Image1} alt="" />
                    </div>

                    <div className="content">
                        <h3>best food in the country</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sequi corrupti corporis quaerat voluptatem ipsam neque labore modi autem, saepe numquam quod reprehenderit rem? Tempora aut soluta odio corporis nihil!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, nemo. Sit porro illo eos cumque deleniti iste alias, eum natus.</p>
                        <div className="icons-container">
                            <div className="icons">
                                <i className="fas fa-shipping-fast"></i>
                                <span>free delivery</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-dollar-sign"></i>
                                <span>easy payments</span>
                            </div>
                            <div className="icons">
                                <i className="fas fa-headset"></i>
                                <span>24/7 service</span>
                            </div>
                        </div>
                        <a href="#" className="btn">learn more</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
