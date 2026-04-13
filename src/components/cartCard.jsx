import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";

function CartCard({ title, price, description, image, item }) {
  const [cartItems, setCartItems] = useOutletContext();
  const [value, setValue] = useState(cartItems[item.id][0]);
  useEffect(() => {
    setCartItems({
      ...cartItems,
      [item.id]: [parseInt(value), item],
    });
  }, [value]);
  const handleChangeCartItems = (amount, item) => {
    setCartItems({
      ...cartItems,
      [item.id]: Object.keys(cartItems).includes(String(item.id))
        ? [(cartItems[item.id][0] += amount), item]
        : [amount, item],
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
        <button
          onClick={() => {
            handleChangeCartItems(1, item);
            setValue(parseInt(value) + 1);
          }}
        >
          +
        </button>
        <input
          type="number"
          name="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            handleChangeCartItems(-1, item);
            setValue(parseInt(value) - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CartCard;
