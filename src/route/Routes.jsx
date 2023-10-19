import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../root/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
  ]);



export default Routes;