import "./Dishes.css";

import Image1 from "../images/dish-1.png";
import Image2 from "../images/dish-2.png";
import Image3 from "../images/dish-3.png";
import Image4 from "../images/dish-4.png";
import Image5 from "../images/dish-5.png";
import Image6 from "../images/dish-6.png";

const Dishes = () => {
    return (
        <>
            <section className="dishes" id="dishes">

                <h3 className="sub-heading"> our dishes </h3>
                <h1 className="heading"> popular dishes </h1>

                <div className="box-container">

                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Image1} alt="" />
                        <h3>cheeseburger</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Image2} alt="" />
                        <h3>chicken nugget</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Image3} alt="" />
                        <h3>roast chicken</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Image4} alt="" />
                        <h3>pizza</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Image5} alt="" />
                        <h3>chocolate chip cookie</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>

                    <div className="box">
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-eye"></a>
                        <img src={Image6} alt="" />
                        <h3>fried chicken</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                        </div>
                        <span>$15.99</span>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dishes
