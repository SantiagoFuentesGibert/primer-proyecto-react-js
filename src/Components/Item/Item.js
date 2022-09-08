const Item = ({nombre, precio, image, cantidad}) => {
    return (
        <article>
            <img src={image} alt={nombre}/>
            <h2>{nombre}</h2>
            <span>{precio}</span>
            <span>{cantidad}</span>
        </article>
    );
}

export default Item;