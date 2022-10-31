import React from 'react';
export const CartContext = React.createContext('');

const CartProvider = ({children}) => {
    <CartContext.Provider>
        {children}
    </CartContext.Provider>
}

export default CartProvider;
