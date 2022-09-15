import CardWidget from './CardWidget/CardWidget'
import './NavBar.styles.css'
import { Link } from 'react-router-dom';

const NavBar =  () => {
    return (
        <div className="NavBar-contenedor">
{/*             <p className="NavBar-menu" href="#1">Inicio</p>
            <a className="NavBar-menu" href="#2">Productos</a>
            <a className="NavBar-menu" href="#3">Contacto</a> */}
            <ul className='NavBar'>
                <li>
                    <Link to={'/'} className="NavBar-menu">
                        Inicio
                    </Link>
                </li>
                <li >
                    <Link to={'/productos'} className="NavBar-menu">
                        Productos
                    </Link>
                </li>
                <li >
                    <Link to={'/contacto'} className="NavBar-menu">
                        Contacto
                    </Link>
                </li>
            </ul>
            <CardWidget />
        </div>
    );
};

export default NavBar;