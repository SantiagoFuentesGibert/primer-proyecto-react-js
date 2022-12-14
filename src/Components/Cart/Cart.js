import { useContext } from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import moment from 'moment'
import './Cart.style.css'

const rutaInicial = '../img/'

const Cart = () => {
    const {cart, removeItem} = useContext(CartContext);
    
    const createOrder = () => {
        const db = getFirestore();
        const order = {
            buyer: {
                name: 'Brenda',
                phone: '11-2345-6578',
                email: 'bren12@gmail.com'
            },
            items: cart,
            total: cart.reduce((valorPasado, valorActual) => valorPasado + (valorActual.price * valorActual.quantity, 0)),
            date: moment().format(),
        };
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(() => {
            alert('Gracias por confiar en nosotros')
        })
        .catch(() => {
            alert('La compra no se puedo realizar con exito, por favor vuelva a intentar mas tarde')
        })
    }

    return (
        <div className="carritoInfo">
            <h1>Carrito</h1>
            {cart.length === 0 ? 
            (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link className="volver" to={'/productos'}>Volver a comprar</Link>
                </>
            ) : 
            (
                <>
                    {cart.map((item) => (
                    <div key={item.id} className="productosCarritoInfo">
                        <img src={rutaInicial + item.image} alt="" className="imgCarritoInfo"/>
                        <div className="infoProductos">
                            <h3>Producto</h3>
                            <h4>{item.nombre}</h4>
                        </div>
                        <div className="infoProductos">
                            <h3>Cantidad</h3>
                            <p>{item.cantidad}</p>
                        </div>
                        <div className="infoProductos">
                            <h3>Precio</h3>
                            <p>${item.price}</p>
                        </div>
                        <button className="btnEliminarCarrito" onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
                    </div>
                    ))}
                    <div>
                        <button className="btnCrearOrden" onClick={createOrder}>
                            Crear orden
                        </button>
                    </div>
                    
                </>
            )}
        </div>
    )
}

export default Cart