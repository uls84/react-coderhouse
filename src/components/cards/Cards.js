import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import Contador from "../contador/Contador";
import './Cards.css';  

const onAdd = (cantidad) => {
    console.log(`${cantidad}`);
}

function Cards({info}) {
    return (
        <div>
            <Card.Body className="img">
            <Card.Img variant="top" src={info.imagen} className="Card"/>
            <Card.Title><h3>{info.nombre}</h3></Card.Title>
            <div>
                <Link to = {`/Detail/${info.id}`}> Ver más</Link>
            </div>

            <Contador initial={1} stock={10} onAdd={onAdd}/>
            </Card.Body>
            
        </div>
    );
}

export default Cards;