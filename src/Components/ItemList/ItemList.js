import Item from '../Item/Item';
import './ItemList.style.css'
const ItemList = ({lista}) => {
    return (
        <div className='listaProductos'>
            {lista.map((product) => (
            <Item 
            key={product.id} 
            nombre={product.nombre} 
            precio={product.precio} 
            image={product.image} 
            cantidad={product.cantidad}/>
            ))
            }
        </div>
    )
}

export default ItemList;