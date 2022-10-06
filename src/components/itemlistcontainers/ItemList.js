import Cards from "../cards/Cards";

const ItemList = ( {data = []}) => {
    return(
        data.map(Producto => <Cards key={Producto.id} info={Producto}/>)
    );
}

export default ItemList;