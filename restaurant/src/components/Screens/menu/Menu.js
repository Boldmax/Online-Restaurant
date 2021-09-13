import "./Menu.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Product from "./product";

// actions
import { getProducts as listProducts } from "../../redux/action/foodActions";

const Menu = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <section className="menu" id="menu">
                <h3 className="sub-heading"> our menu </h3>
                <h1 className="heading"> today's speciality </h1>

                <div className="box-container">
                    {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (products.map((product) => (
                        <Product
                            productId={product._id}
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            imageUrl={product.imageUrl}
                        />
                    ))
                    )}

                </div>
            </section>
        </>
    )
}

export default Menu
