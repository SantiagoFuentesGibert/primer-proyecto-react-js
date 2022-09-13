import './ItemDetailContainer.style.css';
import data from "../mockData";
import { useEffect, useState } from 'react';
import ItemListDetail from "../ItemListDetail/ItemListDetail";

const Productos = (greeting) => {
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.filter((prod) => prod.id === '1'));
        }, 2000)
});


    return (
    <section className='productos'>
            <section>
                <ItemListDetail lista={productList}/>
            </section>
        </section> 
    );
};

export default Productos;