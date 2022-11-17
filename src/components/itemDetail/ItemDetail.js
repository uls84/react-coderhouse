import './ItemDetail.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../contador/Contador';
import { useCartContext } from 'context/CartContext';
import Button from "react-bootstrap/Button";


const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (stock) => {
        setGoToCart(true);
        addProduct(item, stock);
    }

    return (
        <div>
            {item ?
                <div className='fondo'>
                    <h2 className='text'> Detalles de : {item.marca}</h2>
                    <img className='ItemDetail' src={item.imagen} alt={item.marca} />

                    <p>Precio: {item.precio} pesos.</p>
                    <p>Estilo: {item.estilo}</p>
                    <p>Categoria: {item.categoria}</p>
                    <p>Id: {item.id}</p>
                    <p>Stock del producto: {item.stock}</p>
                    {
                        goToCart
                            ? <Link to='/Cart'><Button variant="outline-success">Ver carrito</Button> </Link>
                            : <Contador initial={1} stock={item.stock} onAdd={onAdd} />
                    }
                </div>

                : "Cargando..."}
        </div>
    )
};

export default ItemDetail;