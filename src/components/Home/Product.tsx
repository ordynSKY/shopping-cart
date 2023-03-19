import styles from "./Home.module.css";
import { addToCartSvg } from "../../svg";

const Product = (props: any) => {
  const { name, image, desc, price, handleAddToCart } = props;
  return (
    <div className={styles.product} draggable>
      <h3>{name}</h3>
      <img src={image} className={styles.image} alt="iphone" />
      <div className={styles.description}>
        <span>{desc}</span>
        <span className={styles.price}>{price}$</span>
      </div>
      <button onClick={() => handleAddToCart(props)}>
        {addToCartSvg} &nbsp; Add to cart
      </button>
    </div>
  );
};

export default Product;
