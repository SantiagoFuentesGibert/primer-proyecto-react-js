import './Item.style.css';
const Item = ({nombre, precio, image, cantidad}) => {
    return (
        <article className='contendorProductos text-focus-in '>
            <img className="img" src={image} alt={nombre}/>
            <h2>{nombre}</h2>
            <span>$ {precio}</span>
            <span>Cantidad: {cantidad}</span>
        </article>
    );
}

export default Item;