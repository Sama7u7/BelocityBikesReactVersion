import "./styles.css";
import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { CarritoContext } from "../../Context";

const DetalleProducto = () => {
  const context = useContext(CarritoContext);
  console.log("product toshow: ", context.productoAMostrar);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      }  product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalles</h2>
        <div onClick={() => context.closeProductDetail()}>
          <XMarkIcon className="h-6 w-6 text-black cursor-pointer"></XMarkIcon>
        </div>
      </div>
      {context.productoAMostrar && (
        <>
          <figure className="px-6">
            <img src={context.productoAMostrar.image} />
          </figure>
          <p className="flex flex-col p-6">
            <span className="flex font-bold text-2xl mb-2">
              ${context.productoAMostrar.price}
            </span>
            <span>{context.productoAMostrar.title}</span>
            <span>{context.productoAMostrar.description}</span>
          </p>
        </>
      )}
    </aside>
  );
};

export default DetalleProducto;
