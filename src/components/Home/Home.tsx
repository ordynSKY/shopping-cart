import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import { getProducts } from "../../slices/productsSlice";
import { product, stateType } from "../../types";
import styles from "./Home.module.css";
import Product from "./Product";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (product: product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    const products = useSelector((state: stateType) => {
        return state.products.products;
    });
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <div className={styles.container}>
                <>
                    <h2>Our products</h2>
                    <div className={styles.items}>
                        {products?.map((product: product) => (
                            <Product
                                key={product.id}
                                name={product.name}
                                image={product.image}
                                desc={product.desc}
                                price={product.price}
                                handleAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </>
            </div>
        </>
    );
};

export default Home;
