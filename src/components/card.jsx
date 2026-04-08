import { useOutletContext } from "react-router";

function Card({ title, price, description, image, item }) {
  const [cartItems, setCartItems] = useOutletContext();
  const handleChangeCartItems = () => {
    setCartItems({
      ...cartItems,
      [item.id]: Object.keys(cartItems).includes(String(item.id))
        ? (cartItems[item.id] += 1)
        : 1,
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
        <button>+</button>
        <input type="number" name="amount" value={0} />
        <button>-</button>
        <button onClick={handleChangeCartItems}>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
