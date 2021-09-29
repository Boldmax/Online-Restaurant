import "./Navbar.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    };

    return (
        <>
            <header>
                <Link to={"./"} className="logo"><i className="fas fa-utensils"></i>ClichE</Link>

                <nav className={click ? "navbar active" : "navbar"}>
                    <a className="active" href="#home" onClick={handleClick}>home</a>
                    <a href="#dishes" onClick={handleClick}>dishes</a>
                    <a href="#about" onClick={handleClick}>about</a>
                    <a href="#menu" onClick={handleClick}>menu</a>
                    <a href="#review" onClick={handleClick}>review</a>
                    <a href="#order" onClick={handleClick}>order</a>
                </nav>

                <div className="icons">
                    <i className="fas fa-search" id="search-icon"></i>
                    <a href="#" className="fas fa-heart"></a>
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <i className= {click ? "fas fa-times" : "fas fa-bars"} id="menu-bars" onClick={handleClick}></i>
                </div>
            </header>
        </>
    )
}

export default Navbar;