import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Producto from "../../mocks/List";

/*
const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(Producto)
            }, 3000)
        });
        if(categoriaId) {
            getData.then((res => setData(res.filter(prod => prod.categoria === categoriaId))));
        } else {
            getData.then(res => setData(res));
        }
}, [categoriaId]);

return (
    <div className="container">
        <div>
           {!data ? (
            <div>Cargando...</div>
           ) : (
            <div>
                {data.map((prod) => {
                    return (
                        <div key = {prod.categoria}>
                            <Link to={`/`}
                    )}
            </div>
           )
           } 
        </div>
        <ItemList data={data} />
    </div>
)
}
*/

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