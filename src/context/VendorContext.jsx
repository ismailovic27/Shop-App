import { createContext, useState } from 'react';

export const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const publishProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    console.log('Product published:', newProduct);
  };

  return (
    <VendorContext.Provider value={{ products, publishProduct }}>
      {children}
    </VendorContext.Provider>
  );
};
