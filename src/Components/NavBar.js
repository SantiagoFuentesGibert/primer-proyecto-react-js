import CardWidget from './CardWidget/CardWidget'

const NavBar =  () => {
    return (
        <div className="NavBar-contenedor">
            <a className="NavBar-menu" href="#1">Inicio</a>
            <a className="NavBar-menu" href="#2">Productos</a>
            <a className="NavBar-menu" href="#3">Contacto</a>
            <CardWidget />
        </div>
    );
};

export default NavBar;