import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import { getProducts } from "../../slices/productsSlice";
import { addToCartSvg } from "../../svg";
import { product, stateType } from "../../types";
import styles from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (product: product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    const products = useSelector((state: stateType) => {
        console.log("state: ", state.products);
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
                            <div key={product.id} className={styles.product}>
                                <h3>{product.name}</h3>
                                <img
                                    src={product.image}
                                    className={styles.image}
                                    alt="iphone"
                                />
                                <div className={styles.description}>
                                    <span>{product.desc}</span>
                                    <span className={styles.price}>
                                        {product.price}$
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                >
                                    {addToCartSvg} &nbsp; Add to cart
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            </div>
        </>
    );
};

export default Home;
