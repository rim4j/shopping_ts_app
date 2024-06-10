import { createContext, useContext, ReactNode } from 'react';

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
