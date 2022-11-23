import React, {useEffect,useState} from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = doc(db, 'items', id);
        getDoc(itemCollection).then((res) => {
            setItem({
                id: id,
                ...res.data()})
        })
    }, [id]);


    return (
        <div className="text">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;