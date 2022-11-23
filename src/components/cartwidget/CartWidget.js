import Logo from './cart.svg';
import { useCartContext } from 'context/CartContext';

const CartWidget = () => {
const {totalProducts} = useCartContext(); 

    return (
        <div className="carritoImagen">
            <img src={Logo} className="App-logo" alt="logo" />
            <span>{totalProducts()|| ''}</span>
        </div>
    )
}

export default CartWidget; 