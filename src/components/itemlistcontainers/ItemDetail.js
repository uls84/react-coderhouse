import React, {useState} from 'react';
import Contador from '../contador/Contador';


const ItemDetail = ( {item}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = () => {
        setGoToCart(true);
    }

    return (
        <div className='fondo'>
            <p className='text'> Detalles de : {item.nombre}</p>
            <img className='ItemDetail' src={item.imagen} alt={item.nombre}/>

            <p>Precio: {item.precio} pesos.</p>
            <p>Id: {item.id}</p>
            <p>Categoria: {item.categoria}</p>
            {
                goToCart
                ? <Link to='/cart'> Terminar compra </Link>
                : <Contador initial={1} stock={item.stock} onAdd={onAdd}/>
            }
        </div>
    )
};

export default ItemDetail;