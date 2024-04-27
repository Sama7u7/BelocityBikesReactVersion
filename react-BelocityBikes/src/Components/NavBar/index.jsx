import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CarritoContext } from "../../Context";

const Navbar = () => {
  const context = useContext(CarritoContext);
  const activityStyle = {
    textDecoration: "underline",
    textDecorationOffset: "8px",
  };
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/"> Belocity Bikes</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Electronica
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelry"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Joyeria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/accesories"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Accesorios
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink>alberto@proton.me</NavLink>
        </li>
        <li>
          <NavLink
            to="/mis-ordenes"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Mis ordenes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cuenta"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Mi cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/inicio-sesion"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Iniciar sesion
          </NavLink>
        </li>
        <li>Cart {context.count}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
