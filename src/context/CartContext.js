import React, { useContext, useState } from 'react';
const CartContext = React.createContext([]);

const useCartContext = () => useContext(CartContext);



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, stock) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return (product.id === item.id) && (product.stock - item.stock > stock && product.stock > 0) ? { ...product, stock: product.stock + stock }
                : product;
            }));
        } else {
            setCart([...cart, { ...item, stock }]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.stock * act.precio, 0);
    }

    const totalProducts = () => {
       return cart.reduce((acumulador, productoActual) => acumulador + productoActual.stock, 0);
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }} >
            {children}
        </CartContext.Provider >
    )
};

export {CartProvider, useCartContext} ;
