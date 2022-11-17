import { getFirestore,collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "context/CartContext";

const defaultForm = { name: '', email: '', message: '' };

const CheckOut = () => {
    const [form, setForm] = useState(defaultForm);
    const [ordenid, setOrdenId] = useState('');
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
                        <input name='name' id='name' value={form.name} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='email' className="letter">Email</label>
                        <input name='email' id='email' value={form.email} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor='messege' className='letter'>Ingrese su forma de pago</label>
                        <textarea name='messege' id='messege' value={form.message} onChange={changeHandler}></textarea>
                    </div>
                    <button>Enviar</button>
                    <Link to='/'><button>Volver</button></Link>
                </form>
            )
            }
        </div>
    )
}

export default CheckOut;