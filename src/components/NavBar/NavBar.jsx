import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSvg } from "../../svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const { cartTotalQuantity } = useSelector((state) => state.cart);
    return (
        <>
            <nav className={styles.navbar}>
                <Link to="/">
                    <h2>React Shop</h2>
                </Link>
                <Link to="/cart">
                    <div className={styles.cartIcon}>
                        {cartSvg}
                        <span className={styles.cartQuantity}>
                            <span>{cartTotalQuantity}</span>
                        </span>
                    </div>
                </Link>
            </nav>
        </>
    );
};

export default NavBar;
