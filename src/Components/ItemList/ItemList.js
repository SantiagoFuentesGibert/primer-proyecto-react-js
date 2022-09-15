import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.style.css'
const ItemList = ({lista}) => {
    return (
        <div className='listaProductos'>
            {lista.map((product) => (
            <Link
            key={product.id} 
            to={`/detail/` + product.id}
            >
            <Item 
            nombre={product.nombre} 
            precio={product.precio}
            category={product.category}
            image={product.image} 
            cantidad={product.cantidad}/>
            </Link>
            ))}
        </div>
    );
};            
export default ItemList;