import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Producto from "mocks/Products";

const ItemListContainer = ({categoryId}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Producto)
            }, 2000)
        });
        if(categoryId) {
            getData.then((res => setData(res.filter(prod => prod.categoria === categoryId))));
        } else {
            getData.then(res => setData(res));
        }
    }, [categoryId]);

return (
    <div>
        <ItemList data={data} />
    </div>
)
}


export default ItemListContainer;