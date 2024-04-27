import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

  //cARRO DE COMPRA agrega articulo
  const [count, setCount] = useState(0);


  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  console.log("COUNT: ", count);

  // Detalle productos Abrir /cerrar
    const openProductDetail =  () => setIsProductDetailOpen(true)
    const closeProductDetail =  () => setIsProductDetailOpen(false)

  // Detalle productos  mOstrar producto
  const [productoAMostrar, setProductoAMostrar] = useState();
  return (
    <CarritoContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productoAMostrar,
        setProductoAMostrar

      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
