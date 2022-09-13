import Item from '../ItemDetail/ItemDetail';
import './ItemListDetail.style.css'
const ItemListDetail = ({lista}) => {
    return (
        <div className='listaProductos2'>
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

export default ItemListDetail;