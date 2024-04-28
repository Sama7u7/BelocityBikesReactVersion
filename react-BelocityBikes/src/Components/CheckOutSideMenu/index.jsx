import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CarritoContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

const CheckOutMenu = () => {
  const context = useContext(CarritoContext);
  console.log("product toshow: ", context.productoAMostrar);
  return (
    <aside
      className={`${
        context.isCheckOutMenuOpen ? "flex" : "hidden"
      }  checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi orden</h2>
        <div onClick={() => context.closeCheckOutMenu()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.carritoProductos.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imgURL={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckOutMenu;
