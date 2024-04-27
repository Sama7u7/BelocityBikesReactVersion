import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  console.log("COUNT: ", count);
    const openProductDetail =  () => setIsProductDetailOpen(true)
    const closeProductDetail =  () => setIsProductDetailOpen(false)

  return (
    <CarritoContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
