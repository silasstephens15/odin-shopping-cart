import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [cartItems, setCartItems] = useState({});
  return (
    <>
      <Outlet context={[cartItems, setCartItems]} />
    </>
  );
}

export default App;
