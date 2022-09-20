import CardWidget from './CardWidget/CardWidget'
import logo from '../Components/images/logo2.png';
import './NavBar.styles.css'
import { Link, NavLink } from 'react-router-dom';

const NavBar =  () => {
    return (
        <div className="NavBar-contenedor">
            <NavLink to={'/'}><img src={logo} className="App-logo" alt="logo" /></NavLink>
            <ul className='NavBar'>
                <li>
                    <NavLink to={'/'} className="NavBar-menu">
                        Inicio
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/productos'} className="NavBar-menu">
                        Productos
                    </NavLink>
                </li>
                <li >
                    <NavLink to={'/contacto'} className="NavBar-menu">
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Letras'} className="NavBar-menu">
                        Letras
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Tops'} className="NavBar-menu">
                        Tops
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Carpetas'} className="NavBar-menu">
                        Carpetas
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/category/Accesorios'} className="NavBar-menu">
                        Accesorios
                    </NavLink>
                </li>
            </ul>
            <Link to={'cart'}><CardWidget /></Link>
        </div>
    );
};

export default NavBar;