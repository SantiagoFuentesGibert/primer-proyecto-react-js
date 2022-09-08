import './ItemListContainer.style.css';
import data from "../mockData";
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";

const Productos = (greeting) => {
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });
    }, []);

    const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                setProductList(data);
                resolve();
            }, 2000)
    });
    
    return (
    <section>
            <h2 className='productos-title'>Productos Descatados {greeting.titulo}</h2>
            <section>
                <ItemList lista={productList}/>
            </section>
        </section> 
    );
};

export default Productos;