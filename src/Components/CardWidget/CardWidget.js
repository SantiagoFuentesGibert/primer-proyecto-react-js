import Imagen from '../images/carrito3.png';
import './CardWidget.styles.css';  
import { useContext } from 'react';
import { CartContext } from '../Context/cartContext';

const CardWidget = () => {
    const {totalItems} = useContext(CartContext)
    return (
        <button className="btnCarrito">
            <img className="carrito" src={Imagen} alt='Imagen del carrito'/>
            <div className='contadorCarrito'>{totalItems () > 0 ? totalItems() : "0"}</div>
        </button>
    );
}

export default CardWidget;