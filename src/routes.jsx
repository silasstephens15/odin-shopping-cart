import { Homepage } from "./components/homePage";
import Errorpage from "./components/errorPage";
import ShopPage from "./components/shopPage";
import App from "./components/app";
import Cart from "./components/cartPage";

const items = fetch("https://fakestoreapi.com/products")
  .then((data) => data.json())
  .catch((error) => console.log(error));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop",
        element: <ShopPage itemsMaster={items} />,
        errorElement: <Errorpage />,
      },
      {
        path: "",
        element: <Homepage />,
        errorElement: <Errorpage />,
      },
      { path: "/cart", element: <Cart />, errorElement: <Errorpage /> },
    ],
    errorElement: <Errorpage />,
  },
];

export default routes;
