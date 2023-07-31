import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import MainNav from "./component/MainNav";
import Exchange from "./component/Exchange";
import Coin from "./component/Coin";
import CoinDetail from "./component/CoinDetail";
import ErrorPage from "./component/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNav />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/exchange",
          element: <Exchange />,
        },
        {
          path: "/coins",
          element: <Coin />,
        },
        {
          path: "/coins/:coinsId",
          element: <CoinDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
