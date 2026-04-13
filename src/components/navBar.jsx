import { Link } from "react-router";
import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";

function NavBar() {
  const [cartItems, setCartItems] = useOutletContext();
  const [itemCount, setItemCount] = useState(0);
  (useEffect(() => {
    console.log(cartItems);
    setItemCount(
      Object.keys(cartItems).reduce(
        (acc, curr) => (acc += parseInt(cartItems[curr][0])),
        0,
      ),
    );
  }),
    [cartItems]);
  return (
    <div className="links">
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart {itemCount}</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
