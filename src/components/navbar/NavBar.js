import CartWidget from "../cartwidget/CartWidget";

const NavBar = () => {
    return (
            <nav className="nav">
                <a href="/" className="titulo">Mi tienda</a>
                <ul className="Lista">
                    <li>
                <a href="index.html">Inicio</a>
                    </li>
                    <li>
                <a href="index.html">Productos</a>
                    </li>
                    <li>
                <a href="index.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="index.html"><CartWidget /></a>
                    </li>
                </ul>
            </nav>
    )
}

export default NavBar;