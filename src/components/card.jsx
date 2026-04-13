import { useOutletContext } from "react-router";
import { useState } from "react";

function Card({ title, price, description, image, item }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [value, setValue] = useState(1);
  const handleChangeCartItems = (amount) => {
    setCartItems({
      ...cartItems,
      [item.id]: Object.keys(cartItems).includes(String(item.id))
        ? (cartItems[item.id] += amount)
        : amount,
    });
  };
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Price: {price}</p>
      <img src={image} />
      <p>{description}</p>
      <div className="card-buttons">
        <label htmlFor="amount"></label>
        <button onClick={() => setValue(parseInt(value) + 1)}>+</button>
        <input
          type="number"
          name="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setValue(parseInt(value) - 1)}>-</button>
        <button onClick={() => handleChangeCartItems(parseInt(value))}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
