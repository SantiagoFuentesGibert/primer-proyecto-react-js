/* import Item from "../Item/Item";

export const ItemList = ({lista}) => {
    console.log(lista);
    return (
        <>
        hola
        </>
/*         <section>
            {
                lista.map((product) => (
                    <Item 
                    nombre={product.nombre} 
                    precio={product.precio} 
                    image={product.image} 
                    cantidad={product.cantidad}
                    />
                ))
            }
        </section>  
    )
}*/

import Item from "../Item/Item";

    const ItemList = ({ lista }) => {
    
    return (
        <div>
        {lista.map((product) => {
            return (
            <Item
                nombre={product.nombre}
                precio={product.precio}
                imagen={product.imagen}
                cantidad={product.cantidad}
            />
            );
        })}
        </div>
    );
    };

export default ItemList;