import './Item.style.css';

const rutaInicial = '../img/'
const Item = ({product}) => {
    return (
        <article className='contendorProductos text-focus-in '>
            <img className="img" src={rutaInicial + product.image} alt={product.nombre}/>
            <h2>{product.nombre}</h2>
            <span>$ {product.price}</span>
            <span>Cantidad: {product.stock}</span>
        </article>
    );
}

export default Item;