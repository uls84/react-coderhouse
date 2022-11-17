import React, { useContext, useState } from 'react';
export const useCartContext = () => useContext(CartContext);

const CartContext = React.createContext([]);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, stock) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, stock: product.stock + stock }
                : product
            }));
        } else {
            setCart([...cart, { ...item, stock }]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.stock * act.price, 0);
    }

    const totalProducts = () => {
        cart.reduce((acumulador, preoductoActual) => acumulador + preoductoActual.stock, 0);
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
}

export default CartProvider;
