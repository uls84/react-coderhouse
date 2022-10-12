import React from 'react';
import {useParams} from 'react-router-dom';
import ItemListContainer from "components/itemlistcontainers/ItemListContainer";

const Category = () => {
    const {id} = useParams();
    console.log('.id..', id)
    return <>
            <div> <h2>Cervezas {id}s</h2></div>
            <ItemListContainer categoryId={id}/>
        </>;
};

export default Category;