import Imagen from '../images/img-carrito.png';
import './CardWidget.styles.css';

const Carrito = () => {
    return (
        <button>
            <img className="carrito" src={Imagen} alt='Imagen del carrito'/>
        </button>
    );
}

export default Carrito;