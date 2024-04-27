import { useRoutes, BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "../../Context";

import Home from "../Home";
import Micuenta from "../MyAccount";
import Orden from "../MiOrden";
import MisOrdenes from "../MisOrdenes";
import Not404 from "../NotFound404";
import SignIn from "../SignIn";
import NavBar from "../../Components/NavBar";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/mis-ordenes", element: <MisOrdenes /> },
    { path: "/mi-orden", element: <Orden /> },
    { path: "/cuenta", element: <Micuenta /> },
    { path: "/inicio-sesion", element: <SignIn /> },
    { path: "/Not-Found", element: <Not404 /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </CarritoProvider>
  );
};

export default App;
