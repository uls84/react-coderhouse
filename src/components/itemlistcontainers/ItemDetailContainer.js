import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        const idItemsCollection = doc(itemsCollection, id);
        getDocs(idItemsCollection).then((res) => {
            setItem({
                id: res.id,
                ...res.data()
            })
        })}, [id]);


        return (
            <div className="text">
                <ItemDetail item={item} />
            </div>
        )
    }

export default ItemDetailContainer;