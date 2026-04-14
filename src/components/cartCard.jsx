import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles/card.module.css";

function CartCard({ title, price, description, image, item }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [value, setValue] = useState(cartItems[item.id][0]);

  const handleChangeCartItems = (newValue) => {
    if (newValue <= 0) {
      const { [item.id]: _, ...newCartItems } = cartItems;
      setCartItems(newCartItems);
      return;
    }
    setValue(newValue);
    setCartItems({
      ...cartItems,
      [item.id]: [newValue, item],
    });
  };
  const handleInputChange = (e) => {
    const raw = parseInt(e.target.value);
    if (isNaN(raw)) {
      setValue(raw);
      return;
    }
    handleChangeCartItems(raw);
  };
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <img src={image} />
      <p>{description}</p>
      <div className={styles.cardButtons}>
        <label htmlFor="amount"></label>
        <button
          onClick={() => {
            handleChangeCartItems(value + 1);
          }}
        >
          +
        </button>
        <input
          type="number"
          name="amount"
          value={value}
          onChange={handleInputChange}
          onBlur={() => handleChangeCartItems(value)}
        />
        <button
          onClick={() => {
            handleChangeCartItems(value - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartCard;
