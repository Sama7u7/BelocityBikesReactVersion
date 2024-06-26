import { useContext } from "react";
import { CarritoContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(CarritoContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductoAMostrar(productDetail);
  };

  const addPrdouctsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCarritoProductos([...context.carritoProductos, productData]);
    context.openCheckOutMenu();
    console.log("cart: ", context.carritoProductos);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.carritoProductos.filter((product) => product.id === id).length >
      0;

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2"
          onClick={(event) => addPrdouctsToCart(event, data.data)}
        >
          <CheckIcon className="h-4 w-5 text-white"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-stone-200 w-6 h-6 rounded-full m-2"
          onClick={(event) => addPrdouctsToCart(event, data.data)}
        >
          <PlusIcon className="h-4 w-5 text-black"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-68"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 rounded-sm bg-neutral-100 text-black text-xs ">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg "
          src={data.data.image}
          alt={data.data.description}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-sm font-bold">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
