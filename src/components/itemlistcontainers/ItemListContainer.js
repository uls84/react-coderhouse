import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ categoryId }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        let itemFilter;

        categoryId ?
            itemFilter = query(itemsCollection, where("categoria", "==", categoryId))
            : itemFilter = query(itemsCollection);

        getDocs(itemFilter).then((snapshot) => {
            const arrproducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(arrproducts);
        });
    }, [categoryId]);

    return (
        <div>
            <ItemList key={Math.random()} data={data} />
        </div>
    )
}


export default ItemListContainer;