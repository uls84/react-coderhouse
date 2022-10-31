import { useState, useEffect } from "react";
import './Contador.css';

const Contador = ({ initial, stock, onAdd }) => {
    const [cont, setContador] = useState(parseInt(initial));

    const Sumar = () => {
        setContador(cont + 1);
    };

    const Restar = () => {
        setContador(cont - 1);
    };

    useEffect(() => {
        setContador(parseInt(initial));
    }, [initial]);

    return (
        <div className='Count'>
            <button disabled={cont <= 1} onClick={Restar}>-</button>
            <span>{cont}</span>
            <button disabled={cont >= stock} onClick={Sumar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(Contador)} >Agregar al carrito</button>
            </div>

        </div>

    );
};

export default Contador;