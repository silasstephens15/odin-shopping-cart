import { useOutletContext } from "react-router";
import { useState } from "react";
import styles from "../styles/card.module.css";

function Card({ title, price, description, image, item }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [value, setValue] = useState(1);
  const handleChangeCartItems = (amount, item) => {
    setCartItems({
      ...cartItems,
      [item.id]: Object.keys(cartItems).includes(String(item.id))
        ? [(cartItems[item.id][0] += amount), item]
        : [amount, item],
    });
  };
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <img src={image} />
      <p>{description}</p>
      <div className={styles.cardButtons}>
        <label htmlFor="amount"></label>
        <button onClick={() => setValue(parseInt(value) + 1)}>+</button>
        <input
          type="number"
          name="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setValue(parseInt(value) - 1)}>-</button>
        <button
          onClick={() => handleChangeCartItems(parseInt(value), item)}
          className={styles.addButton}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
