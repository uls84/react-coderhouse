import React from 'react';
import {useParams} from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    return <div>Detail {id}</div>;
};

export default Category;