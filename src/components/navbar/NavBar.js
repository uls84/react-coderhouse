import React from "react";
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="nav">
            <Link to={'/'} className="titulo">Mi tienda</Link>

            <ul className="Lista">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/Category'}>Productos</Link>
                </li>
                <li>
                    <Link to ={'/Nosotros'}>Nosotros</Link>
                </li>
                <li>
                    <Link to={'/RouteCart'}><CartWidget /></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;