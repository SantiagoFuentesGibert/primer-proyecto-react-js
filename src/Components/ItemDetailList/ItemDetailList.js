import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemListDetail.style.css'
const ItemListDetail = ({lista}) => {
    return (
        <div className='listaProductos2'>
            {lista.map((product) => (
            <ItemDetail 
            key={product.id} 
            product={product}
            />
            ))
            }
        </div>
    )
}

export default ItemListDetail;