import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Navigate to='/home'/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/aboutme',
        element: <About/>
      },
      {
        path: '/portfolio',
        element: <Portfolio/>
      }

    ]
  }
]);

export default router;