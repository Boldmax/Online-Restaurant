import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <header>
            <a href="#" className="logo"><i className="fas fa-utensils"></i>ClichE</a>

            <nav className="navbar">
                <a className="active" href="#home">home</a>
                <a href="#dishes">dishes</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#review">review</a>
                <a href="#order">order</a>
            </nav>

            <div className="icons">
                <i className="fas fa-search" id="search-icon"></i>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-shopping-cart"></a>
                <i className="fas fa-bars" id="menu-bars"></i>
            </div>
            </header>
        </>
    )
}

export default Navbar;