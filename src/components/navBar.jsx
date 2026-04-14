import { Link } from "react-router";
import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles/navBarStyles.module.css";

function NavBar() {
  const [cartItems, setCartItems] = useOutletContext();
  const [itemCount, setItemCount] = useState(0);
  useEffect(() => {
    setItemCount(
      Object.keys(cartItems).reduce(
        (acc, curr) => (acc += parseInt(cartItems[curr][0])),
        0,
      ),
    );
  }, [cartItems]);
  return (
    <div className={styles.links}>
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({itemCount} items)</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
