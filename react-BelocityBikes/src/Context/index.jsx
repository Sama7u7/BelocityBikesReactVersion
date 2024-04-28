import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  //cARRO DE COMPRA agrega articulo
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  console.log("COUNT: ", count);

  // Detalle productos Abrir /cerrar
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckOutMenuOpen, setIsCheckOutMenuOpen] = useState(false);
  const openCheckOutMenu = () => setIsCheckOutMenuOpen(true);
  const closeCheckOutMenu = () => setIsCheckOutMenuOpen(false);

  // Detalle productos  mOstrar producto
  const [productoAMostrar, setProductoAMostrar] = useState();
  //  Carro compras -  agregar productos al carro
  const [carritoProductos, setCarritoProductos] = useState([]);

  return (
    <CarritoContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productoAMostrar,
        setProductoAMostrar,
        carritoProductos,
        setCarritoProductos,
        isCheckOutMenuOpen,
        openCheckOutMenu,
        closeCheckOutMenu,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
