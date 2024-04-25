import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activityStyle = {
    textDecoration: "underline",
  };
  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Belocity Bikes
          </NavLink>
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
            to="/mountain"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Montana
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bmx"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            BMX
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electric"
            style={({ isActive }) => (isActive ? activityStyle : undefined)}
          >
            Electricas
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
          <NavLink to="/mis-ordenes">Mis ordenes</NavLink>
        </li>
        <li>
          <NavLink to="/cuenta">Mi cuenta</NavLink>
        </li>
        <li>
          <NavLink to="/inicio-sesion">Iniciar sesion</NavLink>
        </li>
        <li>Cart 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
