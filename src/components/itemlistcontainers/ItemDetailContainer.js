import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Producto from "./List";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                console.log("Entre a la promesa")
                resolve(Producto)
            }, 3000)
        });

        getData.then(res => setItem(res.find((prod) => prod.id === Number(id))));
    }, [id])

    return (
        <div className="text">
            <ItemDetail item={item} />
            <p>Id: {id}</p>
            {/*<p>Precio: USD{item.precio}</p>*/}
        </div>
    )
}

export default ItemDetailContainer;