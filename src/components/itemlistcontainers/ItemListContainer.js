import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Producto from "./List";


const ItemListContainer = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Producto)
            }, 3000)
        });
    getData.then(res => setData(res));
}, []);

return (
    <div>

        <ItemList data={data} />
    </div>
)
}

export default ItemListContainer;