import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../root/Root";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
      ]
    },
  ]);



export default Routes;