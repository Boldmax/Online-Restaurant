import "./Menu.css";
import { Link } from "react-router-dom";

/* import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'; */

const Product = ({ imageUrl, name, price, description, productId }) => {

    /*     const dispatch = useDispatch();
        const ProductDetails = useSelector(state => state.getProductDetails);
        const { product, loading, error } = ProductDetails; */

    return (
        <div className="box">
            <div className="image">
                <img src={imageUrl} alt="" />
                <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/product/${productId}`} className="btn">check it out</Link>
                <span className="price">${price}</span>
            </div>
        </div>
    )
}

export default Product;
