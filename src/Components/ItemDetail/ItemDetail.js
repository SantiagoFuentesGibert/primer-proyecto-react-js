import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.styles.css';
const ItemDetail = ({nombre, detail, precio, image, cantidad, btnAgregarCarrito}) => {
    return (
        <article className='contendorProductosDetalle text-focus-in '>
            <img className="img" src={image} alt={nombre}/>
            <div className='infoProductos'>
                <h2>{nombre}</h2>
                <p>{detail}</p>
                <p>$ {precio}</p>
                <p>Disponibles: {cantidad}</p>
                <Counter stockProductos={cantidad}/>
                <button className='btnAgregarCarrito'>{btnAgregarCarrito}</button>
                <Link to={'/cart'}>Ir al carrito</Link>
            </div>
        </article>
    );
}

export default ItemDetail;
