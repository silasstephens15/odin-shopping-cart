import { useEffect, useState } from "react";
import { Link } from "react-router";

function ShopPage({ itemsMaster }) {
  const [items, setItems] = useState(null);
  useEffect(() => {
    itemsMaster.then((data) => setItems(data));
  }, []);
  return (
    <>
      <header>
        <h1>Shop Page</h1>
        <Link to="/">Return to Home Page.</Link>
      </header>
      <main>{}</main>
    </>
  );
}

export default ShopPage;
