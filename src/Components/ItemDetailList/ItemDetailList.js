import Item from '../ItemDetail/ItemDetail';
import './ItemListDetail.style.css'
const ItemListDetail = ({lista}) => {
    return (
        <div className='listaProductos2'>
            {lista.map((product) => (
            <Item 
            key={product.id} 
            product={product}
            />
            ))
            }
        </div>
    )
}

export default ItemListDetail;