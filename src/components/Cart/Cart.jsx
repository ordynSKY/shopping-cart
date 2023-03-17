import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotal,
    removeFromCart,
} from "../../slices/cartSlice";
import styles from "./Cart.module.css";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotal());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <div className={styles.container}>
                <h2>Shopping Cart</h2>
                {cart.cartItems.length === 0 ? (
                    <div className={styles.cartEmpty}>
                        <p>Your cart is currently empty</p>
                        <div className={styles.startShopping}>
                            <Link to="/">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <span>&nbsp;Back to the shop</span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={styles.titles}>
                            <h3 className={styles.title}>Product</h3>
                            <h3 className={styles.price}>Price</h3>
                            <h3 className={styles.quantity}>Quantity</h3>
                            <h3 className={styles.total}>Total</h3>
                        </div>
                        <div className={styles.items}>
                            {cart.cartItems?.map((cartItem) => (
                                <div key={cartItem.id} className={styles.item}>
                                    <div className={styles.product}>
                                        <img
                                            src={cartItem.image}
                                            alt={cartItem.name}
                                        />
                                        <div>
                                            <h3>{cartItem.name}</h3>
                                            <p>{cartItem.desc}</p>
                                            <button
                                                onClick={() =>
                                                    handleRemoveFromCart(
                                                        cartItem
                                                    )
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.productPrice}>
                                        {cartItem.price}$
                                    </div>
                                    <div className={styles.productQuantity}>
                                        <button
                                            onClick={() =>
                                                handleDecreaseCart(cartItem)
                                            }
                                        >
                                            -
                                        </button>
                                        <div className={styles.count}>
                                            {cartItem.cartQuantity}
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleIncreaseCart(cartItem)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.totalPrice}>
                                        {cartItem.price * cartItem.cartQuantity}
                                        $
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.summary}>
                            <button
                                className={styles.clear}
                                onClick={() => handleClearCart()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-x-circle-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                                &nbsp; Clear cart
                            </button>
                            <div className={styles.checkout}>
                                <div className={styles.subtotal}>
                                    <span>Subtotal</span>
                                    <span className={styles.amount}>
                                        {cart.cartTotalAmount}$
                                    </span>
                                </div>
                                <p>Taxes and shipping calculated at checkout</p>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-check-circle-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                    &nbsp; CheckOut
                                </button>
                                <div className={styles.continueShopping}>
                                    <Link to="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span>&nbsp;Continue shopping</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Cart;
