// src/context/VendorProvider.jsx
import { createContext, useState } from 'react';

// Create Context
export const VendorContext = createContext();

export default function VendorProvider({ children }) {
  const [products, setProducts] = useState([]);

  // Function to publish a product
  const publishProduct = (newProduct) => {
    // Here you can also call API to save product to backend
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <VendorContext.Provider value={{ products, publishProduct }}>
      {children}
    </VendorContext.Provider>
  );
}
