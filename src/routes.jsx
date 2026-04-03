import { Homepage } from "./components/homePage";
import Errorpage from "./components/errorPage";
import ShopPage from "./components/shopPage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Errorpage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    errorElement: <Errorpage />,
  },
];

export default routes;
