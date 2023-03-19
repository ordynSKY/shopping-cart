import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSvg } from "svg";
import styles from "./NavBar.module.css";
import { stateType } from "types";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state: stateType) => state.cart);

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
              <span style={{ color: "white", fontSize: 10 }}>
                {cartTotalQuantity}
              </span>
            </span>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
