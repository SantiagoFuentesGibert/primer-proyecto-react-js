import './ItemDetail.styles.css';
const ItemDetail = ({nombre, precio, image, cantidad}) => {
    return (
        <article className='contendorProductosDetalle text-focus-in '>
            <img className="img" src={image} alt={nombre}/>
            <div>
                <h2>{nombre}</h2>
                <p>Nombres tejidos al crochet y rellenos de vellón. Se realizan por pedido con una semana de antelación y seña del 30% del precio.</p>
                <p>$ {precio}</p>
                <p>Cantidad: {cantidad}</p>
                <button className='btnCarrito'>Agregar al carrito</button>
            </div>
        </article>
    );
}

export default ItemDetail;
