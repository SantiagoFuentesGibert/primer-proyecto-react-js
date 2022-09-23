import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.styles.css';
import { CartContext } from '../Context/cartContext';

const ItemDetail = ({product}) => {
    const [stock, setStock] = useState(1);
    const { addToCart} = useContext(CartContext)
    function onAdd(product) {
        addToCart(product, stock) 
    };
    return (
        <article className='contendorProductosDetalle text-focus-in '>
            <img className="img" src={product.image} alt={product.nombre}/>
            <div className='infoProductos'>
                <h2>{product.nombre}</h2>
                <p>{product.detail}</p>
                <p>$ {product.precio}</p>
                <p>Disponibles: {product.cantidad}</p>
                <Counter stockProductos={product.cantidad} stock={stock} setStock={setStock}/>
                <button className='btnAgregarCarrito' onClick={() => onAdd(product)}>{product.btn}</button>
                <Link to={'/cart'}>Ir al carrito</Link>
            </div>
            <Link to={"/"}>Volver</Link>
        </article>
    );
}

export default ItemDetail;
