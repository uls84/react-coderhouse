const ItemDetail = ( {item}) => {
    return (
        <div className='fondo'>
            <p className='text'> Detalles de : {item.nombre}</p>
            <img className='ItemDetail' src={item.imagen} alt={item.nombre}/>
        </div>
    )
};

export default ItemDetail;