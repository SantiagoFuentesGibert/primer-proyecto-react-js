import Item from '../Item/Item';
import './ItemList.style.css'
const ItemList = ({lista}) => {
    return (
        <div>
            {lista.map((product) => (<Item nombre={product.nombre} precio={product.precio} image={product.image} cantidad={product.cantidad}/>))
            }
        </div>
    )
}

export default ItemList;