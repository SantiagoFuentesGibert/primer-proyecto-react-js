import './ItemListContainer.style.css';
import data from "../mockData";
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";

const Productos = (props) => {
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
});


    return (
    <section className='productos'>
            <h2 className='productos-title tracking-in-contract '>{props.titulo}</h2>
            <section>
                <ItemList lista={productList}/>
            </section>
        </section> 
    );
};

export default Productos;