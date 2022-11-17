import React from 'react';
import './itemCart.css';
import { useCartContext } from 'context/CartContext';

const ItemCart = ({ item }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='itemCart'>
            <img src={item.imagen} alt={item.nombre} />
            <div>
                <p>Marca: {item.marca}</p>
                <p>Cantidad: {item.stock}</p>
                <p>Precio u: {item.precio}</p>
                <p>Subtotal {item.stock * item.precio}</p>
                <button onClick={() => removeProduct(item.id)}>Eliminar</button>
            </div>
        </div >
    )
}

export default ItemCart;