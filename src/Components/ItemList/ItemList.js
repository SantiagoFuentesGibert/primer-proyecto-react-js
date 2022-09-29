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
            style={{textDecoration:"none", color:"black"}}
            >
            <Item 
            product={product}/>
            </Link>
            ))}
        </div>
    );
};            
export default ItemList;