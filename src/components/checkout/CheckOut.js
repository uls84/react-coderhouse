import './CheckOut.css';
import { getFirestore,collection, addDoc, serverTimestamp, getDoc, doc, updateDoc } from "firebase/firestore";
import { useState} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "context/CartContext";


const defaultForm = { name: '',apellido: '', email: '', telefono: '', message: '' };

const CheckOut = () => {
    const [form, setForm] = useState(defaultForm);
    const [ordenid, setOrdenId] = useState('');
    const [notPurchased, seNotPurchased] = useState([]);
    const { cart, totalPrice, clearCart } = useCartContext();


    const changeHandler = (ev) => {
        setForm({ ...form, [ev.target.name]: ev.target.value });
    }

    const submitHandler = (ev) => {
        ev.preventDefault();

        const db = getFirestore();
        const orderCollection = collection(db, 'ordenes');
        addDoc(orderCollection, {
            form,
            item: cart,
            total: totalPrice(),
            time: serverTimestamp()
        }).then((snapshot) => {
            setOrdenId(snapshot.id);
            clearCart();
        })

        cart.forEach(async (itemCart) => {
            let stock = 0;
            const db = getFirestore()
            const docRef = doc(db, 'items', itemCart.id);
            await getDoc(docRef).then((res) => {
                console.log('res.data().stock-->', res.data().stock);
                stock = res.data().stock;
            })

            if (stock => itemCart.stock && stock > 0) {
                let newStock = stock - itemCart.stock
                updateDoc(docRef, {stock: newStock}).then(res => {
                }).catch(error => { throw new Error ('No se puede actualizar'); })
            } else {
                seNotPurchased(current => [...current, itemCart]);
                throw new Error ('No hay stock');
            }
            
        })

    }

    return (
        <div>
            {ordenid ? (
                <div>
                    Gracias por su compra, el numero de su pedido es: {ordenid}
                </div>
                
            ) : (
                <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name' className="letter">Nombre</label>
                    <input required name='name' id='name' value={form.name} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor='apellido' className="letter">Apellido</label>
                    <input required name='apellido' id='apellido' value={form.apellido} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor='email' className="letter">Email</label>
                    <input required name='email' id='email' value={form.email} onChange={changeHandler} />
                </div>
                <div>
                    <label htmlFor='telefono' className="letter">Telefono</label>
                    <input required name='telefono' id='telefono' value={form.telefono} onChange={changeHandler} />
                </div>
                <button>Enviar</button>
                <Link to='/'><button>Volver</button></Link>
            </form>
            )
            }
            {notPurchased.length > 0 && <div>
                    <p>Los siguientes productos no pudieron agregarse a la orden porque no había stock existente</p><ul>
                    {notPurchased.map((item) => {return <li>{item.marca}</li>})}
                </ul></div> }
        </div>
    )
}

export default CheckOut;