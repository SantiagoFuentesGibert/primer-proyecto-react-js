import { useState } from "react"
import { CartContext } from './cartContext'

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya esta en el carrito')
        }else {
            setCart([...cart, {...item, cantidad}]);
        }
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const removeItem = (productId) => {
        let nuevoArreglo = [];
        cart.forEach((product) => {
            if (product.id === productId) {
                console.log(product);
            }else {
                nuevoArreglo.push(product)
            }
        });
        setCart(nuevoArreglo);
    };

    const totalItems = () => {
        return cart.reduce((acc, cartItem) => acc + cartItem.cantidad, 0);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, totalItems}}>
            {children}
        </CartContext.Provider>
    )
};