import { Link } from 'react-router-dom';
import ItemCart from 'components/itemCart/ItemCart';
import { useCartContext } from 'context/CartContext';

const Cart = () => {
    const { cart, totalProducts, totalPrice } = useCartContext();

    return (
        <div className='contenedor'>
            <div><h2>Carrito de compras</h2></div>
            {cart.length === 0 ?
                <>
                    <p>No hay elementos en el carrito</p>
                    <Link to='/'><button>Ir a comprar</button></Link>
                </>
                :
                <div>
                    <>
                        {cart.map((product) => (<ItemCart key={product.id} item={product} />))}
                        <div className='product'><p>Cantidad de productos: {totalProducts()}</p>
                            <p>total: {totalPrice()} pesos</p></div>
                        <Link to='/'><button>Seguir comprando</button></Link>
                        <Link to='/checkout'><button>Finalizar compra</button></Link>
                    </>
                </div>
            }
        </div>
    )
}

export default Cart;