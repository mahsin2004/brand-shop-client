import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../root/Root";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRoute from "./PrivetRoute";
import MyCart from "../pages/Mycart";
import Products from "../component/Products";
import Update from "../component/Update";
import Details from "../component/Details";

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
          element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/myCart",
          element: <PrivetRoute><MyCart></MyCart></PrivetRoute>,
        },
        {
          path: "/products/:id",
          element: <Products></Products>,
          loader: ({params}) => fetch(`https://brand-shop-server-ee5q1ivi9-mahsin2004s-projects.vercel.app/names/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <PrivetRoute><Update></Update></PrivetRoute>,
          loader: ({params}) => fetch(`https://brand-shop-server-ee5q1ivi9-mahsin2004s-projects.vercel.app/brands/${params.id}`)
        },
        {
          path: "/details/:id",
          element: <PrivetRoute><Details></Details></PrivetRoute>,
          loader: ({params}) => fetch(`https://brand-shop-server-ee5q1ivi9-mahsin2004s-projects.vercel.app/brands/${params.id}`)
        }
      ]
    },
  ]);



export default Routes;