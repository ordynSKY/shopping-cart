import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import { useGetAllProductsQuery } from "../../slices/productsApi";
import { addToCartSvg } from "../../svg";
import { product } from "../../types";
import styles from "./Home.module.css";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddToCart = (product: product) => {
        dispatch(addToCart(product));
        navigate("/cart");
    };

    return (
        <>
            <div className={styles.container}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>An error occured...</p>
                ) : (
                    <>
                        <h2>Our products</h2>
                        <div className={styles.items}>
                            {data?.map((product: product) => (
                                <div
                                    key={product.id}
                                    className={styles.product}
                                >
                                    <h3>{product.name}</h3>
                                    <img
                                        src={product.image}
                                        className={styles.image}
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
                )}
            </div>
        </>
    );
};

export default Home;
