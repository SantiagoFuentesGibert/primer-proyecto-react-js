import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.styles.css';
import { CartContext } from '../Context/cartContext';

const rutaInicial = '../img/'

const ItemDetail = ({product}) => {
    const [stock, setStock] = useState(1);
    const { addToCart} = useContext(CartContext)
    function onAdd(product) {
        addToCart(product, stock) 
    };
    return (
        <article className='contendorProductosDetalle text-focus-in '>
            <img className="img" src={rutaInicial + product.image} alt={product.nombre}/>
            <div className='infoProductos'>
                <h2>{product.nombre}</h2>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <p>Disponibles: {product.stock}</p>
                <Counter stockProductos={product.stock} stock={stock} setStock={setStock}/>
                <button className='btnAgregarCarrito' onClick={() => onAdd(product)}>Agregar al carrito</button>
                <Link className='irAlCarrito' to={'/cart'}>Ir al carrito</Link>
            </div>
            <Link className='volverProductos' to={"/"}>Volver</Link>
        </article>
    );
}

export default ItemDetail;
