import React, { createContext, useMemo, useState } from 'react';


export const CartContext = createContext();


export function CartProvider({ children }) {
const [items, setItems] = useState({}); // { [productId]: { product, qty } }


const addToCart = (product, qty = 1) => {
setItems((prev) => {
const current = prev[product.id]?.qty || 0;
return { ...prev, [product.id]: { product, qty: current + qty } };
});
};


const updateQty = (productId, qty) => {
setItems((prev) => ({
...prev,
[productId]: { ...prev[productId], qty: Math.max(1, qty) },
}));
};


const removeFromCart = (productId) => {
setItems((prev) => {
const clone = { ...prev };
delete clone[productId];
return clone;
});
};


const clearCart = () => setItems({});


const summary = useMemo(() => {
const list = Object.values(items);
const totalQty = list.reduce((a, i) => a + i.qty, 0);
const subtotal = list.reduce((a, i) => a + i.qty * i.product.price, 0);
return { totalQty, subtotal };
}, [items]);


return (
<CartContext.Provider value={{ items, addToCart, updateQty, removeFromCart, clearCart, summary }}>
{children}
</CartContext.Provider>
);
}