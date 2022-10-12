import React from 'react';
import Contador from '../contador/Contador';

const onAdd = (cantidad) => {
    console.log(`${cantidad}`);
}

const ItemDetail = ( {item}) => {
    return (
        <div className='fondo'>
            <p className='text'> Detalles de : {item.nombre}</p>
            <img className='ItemDetail' src={item.imagen} alt={item.nombre}/>

            <p>Precio: {item.precio} pesos.</p>
            <p>Id: {item.id}</p>
            <p>Categoria: {item.categoria}</p>
            <Contador initial={1} stock={item.stock} onAdd={onAdd}/>
        </div>
    )
};

export default ItemDetail;