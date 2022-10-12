import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Producto from "mocks/Products";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Producto)
            }, 2000)
        });

        getData.then(res => setItem(res.find((prod) => prod.id === Number(id))));
    }, [id])

    return (
        <div className="text">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;