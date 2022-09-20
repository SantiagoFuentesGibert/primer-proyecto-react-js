import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.styles.css';
const ItemDetail = ({nombre, detail, precio, image, cantidad, btnAgregarCarrito}) => {
    return (
        <article className='contendorProductosDetalle text-focus-in '>
            <img className="img" src={image} alt={nombre}/>
            <div>
                <h2>{nombre}</h2>
                <p>{detail}</p>
                <p>$ {precio}</p>
                <p>Cantidad: {cantidad}</p>
                <button className='btnAgregarCarrito'>{btnAgregarCarrito}</button>
                <Counter />
                <Link to={'/cart'}>Ir al carrito</Link>
            </div>
        </article>
    );
}

export default ItemDetail;
