import Cards from "../cards/Cards";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ItemList = ( {data = []}) => {
    return(
        <Container fluid="md">
            <Row>
                {data.map(Producto => <Col md="4" key={Producto.id} > <Cards info={Producto}/> </Col>)}
            </Row>
        </Container>
    );
}

export default ItemList;