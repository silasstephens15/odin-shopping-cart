import { useEffect, useState } from "react";
import Card from "./card";
import NavBar from "./navBar";

function ShopPage({ itemsMaster }) {
  const [items, setItems] = useState(null);
  useEffect(() => {
    itemsMaster.then((data) => setItems(data));
  });
  return (
    <>
      <header>
        <h1>Shop Page</h1>
        <NavBar />
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
                item={item}
              />
            ))
          : "Loading..."}
      </main>
    </>
  );
}

export default ShopPage;
