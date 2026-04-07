import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "./card";

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
      <main>
        {items
          ? items.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            ))
          : "Loading..."}
      </main>
    </>
  );
}

export default ShopPage;
