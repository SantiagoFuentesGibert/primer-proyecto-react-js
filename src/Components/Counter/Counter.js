import React, {useState} from "react";
import './Counter.styles.css'

const Counter = (props) => {
    const stockDisponible = 10;
    const [stock, setStock] = useState(0);
    const sumar = () => stock < props.stock ? setStock(stock + 1) : alert('Se alcanzo el stock disponible')
    const restar = () => stock > 0 ? setStock(stock - 1) : alert('No sé pueden introducir valores negativos')
  return (
    <>
    <div className="contenedorCounter">
        <div className="counter">
            <span className="stockDisponible">Stock disponible {stockDisponible}</span>
            <div className="stockDisponible">{stock}</div>
            <button className="botonCounterRestar" onClick={restar}>-</button>
            <button className="botonCounterSumar" onClick={sumar}>+</button>
        </div>
    </div>
    </>
  );
}

export default Counter;