import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../slices/cartSlice";
import { useGetAllProductsQuery } from "../../slices/productsApi";
import styles from "./Home.module.css";

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery(null);
    const dispatch = useDispatch();

    const handleAddToCart = (product: {
        id: Key | null | undefined;
        name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | null
            | undefined;
        image: string | undefined;
        desc:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        price:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
    }) => {
        dispatch(addToCart(product));
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
                            {data?.map(
                                (product: {
                                    id: Key | null | undefined;
                                    name:
                                        | string
                                        | number
                                        | boolean
                                        | ReactElement<
                                              any,
                                              | string
                                              | JSXElementConstructor<any>
                                          >
                                        | ReactFragment
                                        | null
                                        | undefined;
                                    image: string | undefined;
                                    desc:
                                        | string
                                        | number
                                        | boolean
                                        | ReactElement<
                                              any,
                                              | string
                                              | JSXElementConstructor<any>
                                          >
                                        | ReactFragment
                                        | ReactPortal
                                        | null
                                        | undefined;
                                    price:
                                        | string
                                        | number
                                        | boolean
                                        | ReactElement<
                                              any,
                                              | string
                                              | JSXElementConstructor<any>
                                          >
                                        | ReactFragment
                                        | ReactPortal
                                        | null
                                        | undefined;
                                }) => (
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
                                            onClick={() =>
                                                handleAddToCart(product)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-basket"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                            &nbsp; Add to cart
                                        </button>
                                    </div>
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Home;
