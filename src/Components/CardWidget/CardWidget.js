import Imagen from '../images/img-carrito.png';
import './CardWidget.styles.css';

const Carrito = () => {
    return (
        <img className="carrito" src={Imagen} alt='Imagen del carrito'></img>
    );
}

export default Carrito;