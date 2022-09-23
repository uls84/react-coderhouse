const ItemListContainer = ({ greeting }) => {
    return (
        <div className="bienvenida">

            <h1>
                {greeting}
            </h1>
            <h2>
                Bienvenidos a la tienda!
            </h2>
        </div>
     )
};

export default ItemListContainer;