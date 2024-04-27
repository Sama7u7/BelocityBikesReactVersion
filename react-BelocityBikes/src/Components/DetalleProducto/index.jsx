import "./styles.css";
import { BeakerIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
const DetalleProducto = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalles</h2>
        <ShoppingCartIcon className="h-6 w-6 text-black-500" />
        <div>X</div>
      </div>
    </aside>
  );
};

export default DetalleProducto;
