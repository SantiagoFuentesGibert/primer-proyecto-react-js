import Imagen from '../images/carrito3.png';
import './CardWidget.styles.css';

const Carrito = () => {
    return (
        <button className="btnCarrito">
            <img className="carrito" src={Imagen} alt='Imagen del carrito'/>
        </button>
    );
}

export default Carrito;