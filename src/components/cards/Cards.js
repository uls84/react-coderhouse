import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
//import Contador from "../contador/Contador";
import "./Cards.css";

//import { useStorePersist } from "store/context";

/*const onAdd = (cantidad) => {
    console.log(`${cantidad}`);
}*/

function Cards({ info }) {
  /*const [{
        carritoProductos,  // El listado de las unidades
    }, dispatchPersist] = useStorePersist();

    console.log(carritoProductos)*/
  return (
    <div>
      <Card border="dark" style={{ width: "19rem", height: "38rem" }}>
        <Card.Body className="img, text-center" bg="light">
          <Card.Img
            variant="top"
            src={info.imagen}
            className="Card"
            fluid="true"
          />
          <Card.Title>
            <h2>
              {info.marca} - {info.nombre}
            </h2>
          </Card.Title>
          <div>
            <Link to={`/Item/${info.id}`}>
              <Button variant="outline-success">Ver más</Button>
            </Link>
          </div>

          {/*<Contador initial={1} stock={10} onAdd={onAdd}/>*/}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
