import React from "react";
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className="nav">
            <Link to={'/'} className="titulo">Mi tienda</Link>

            <ul className="Lista">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/Category/rubia'}>Rubia</Link>
                </li>
                <li>
                    <Link to={'/Category/roja'}>Roja</Link>
                </li>
                <li>
                    <Link to={'/Category/negra'}>Negra</Link>
                </li>
                <li>
                    <Link to ={'/Nosotros'}>Nosotros</Link>
                </li>
                <li>
                    <Link to={'/Cart'}><CartWidget /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;