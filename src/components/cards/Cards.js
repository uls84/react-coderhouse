import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
//import Contador from "../contador/Contador";
import './Cards.css';  

//import { useStorePersist } from "store/context";

/*const onAdd = (cantidad) => {
    console.log(`${cantidad}`);
}*/

function Cards({info}) {
    /*const [{
        carritoProductos,  // El listado de las unidades
    }, dispatchPersist] = useStorePersist();

    console.log(carritoProductos)*/
    return (
        <div>
            <Card.Body className="img">
            <Card.Img variant="top" src={info.imagen} className="Card" fluid="true"/>
            <Card.Title>
                <h2>{info.marca} - {info.nombre}</h2></Card.Title>
                <h3>{info.categoria}</h3>
            <div>
                <Link to = {`/Item/${info.id}`}> Ver más</Link>
            </div>

            {/*<Contador initial={1} stock={10} onAdd={onAdd}/>*/}
            </Card.Body>
            
        </div>
    );
}

export default Cards;