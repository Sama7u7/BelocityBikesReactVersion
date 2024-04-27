import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("COUNT: ", count);

  return (
    <CarritoContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
