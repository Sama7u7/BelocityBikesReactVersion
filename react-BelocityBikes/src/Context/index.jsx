import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  console.log("COUNT: ", count);

  return (
    <CarritoContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
