import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ categoryId }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');

        if (categoryId) {
            const itemFilter = query(itemsCollection, where("categoria", "==", categoryId));
            getDocs(itemFilter).then((res) =>
                setData(res.docs.map((item =>
                    (item.data())))))
        } else {
            getDocs(itemsCollection).then((res) =>
                setData(res.docs.map((item =>
                    (item.data())))))
        }

    }, [categoryId]);

return (
        <div>
            <ItemList data={data} />
        </div>
    )
}


export default ItemListContainer;