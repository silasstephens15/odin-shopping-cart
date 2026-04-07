import { Homepage } from "./components/homePage";
import Errorpage from "./components/errorPage";
import ShopPage from "./components/shopPage";

const items = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .catch((error) => console.log(error));

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/shop",
    element: <ShopPage itemsMaster={items} />,
    errorElement: <Errorpage />,
  },
];

export default routes;
