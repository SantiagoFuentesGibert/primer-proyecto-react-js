import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";

const Cart = () => {
    const {cart, addToCart, removeItem} = useContext(CartContext);
    console.log('cart', cart);
    return (
        <div>
            <h1>Carrito</h1>
            {cart.length === 0 ? 
            (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to={'/productos'}>Volver a comprar</Link>
                </>
            ) : 
            (
                <>
                    {cart.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt=""/>
                        <div>
                            <h3>Producto</h3>
                            <h4>{item.nombre}</h4>
                        </div>
                        <div>
                            <h3>Cantidad</h3>
                            <p>{item.cantidad}</p>
                        </div>
                        <div>
                            <h3>Precio</h3>
                            <p>${item.precio}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
                    </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cart