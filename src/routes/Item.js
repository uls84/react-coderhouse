import React from 'react';
//import ItemDetailContainer from '../components/itemlistcontainers/ItemDetailContainer';

const Item = () => {
    return (
        Producto.map((prod) => (
            <div>
                <p>
                    `Cerveza: {prod.nombre}`
                </p>

            </div>
        )
        )
    )
};

export default Item;