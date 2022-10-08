import React from "react";
import CartWidget from "../cartwidget/CartWidget";
import {Link} from "react-router-dom";   
import Home from '../../routes/Home';
import Detail from '../../routes/Detail';

const NavBar = () => {
    return (
            <nav className="nav">
                <Link to={'/'} className="titulo">Mi tienda</Link>
                
                <ul className="Lista">
                    <li>
                <Link to ={Home}>Home</Link>
                    </li>
                    <li>
                <Link to ={'/Productos'}>Productos</Link>
                    </li>
                    <li>
                <Link to ={'/Detail'}>Detail</Link>
                {/*<Link to ={'/Nosotros'}>Nosotros</Link>*/}
                    </li>
                    <li>
                        <Link to ={'/Carrito'}><CartWidget /></Link>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar;