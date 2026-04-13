import { useOutletContext } from "react-router";
import NavBar from "./navBar";
import CartCard from "./cartCard";

function Cart() {
  const [cartItems, setCartItems] = useOutletContext();
  return (
    <>
      <header>
        <h1>Cart</h1>
        <NavBar />
      </header>
      <main>
        {Object.keys(cartItems).length !== 0
          ? Object.keys(cartItems).map((item) => (
              <CartCard
                key={item}
                title={cartItems[item][1].title}
                price={cartItems[item][1].price}
                image={cartItems[item][1].image}
                description={cartItems[item][1].description}
                item={cartItems[item][1]}
                cart={true}
              />
            ))
          : "Empty"}
      </main>
    </>
  );
}

export default Cart;
