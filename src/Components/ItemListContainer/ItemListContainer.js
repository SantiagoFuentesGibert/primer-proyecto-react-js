import './ItemListContainer.style.css';

const Productos = (greeting) => {
    return (
        <div>
            <h2 className='productos-title'>Productos Descatados {greeting.titulo}</h2>
        </div>
    );
};

export default Productos;