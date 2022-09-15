import Item from '../ItemDetail/ItemDetail';
import './ItemListDetail.style.css'
const ItemListDetail = ({lista}) => {
    return (
        <div className='listaProductos2'>
            {lista.map((product) => (
            <Item 
            key={product.id} 
            nombre={product.nombre} 
            detail={product.detail}
            precio={product.precio} 
            image={product.image} 
            cantidad={product.cantidad}
            btnAgregarCarrito={product.btn}
            />
            ))
            }
        </div>
    )
}

export default ItemListDetail;