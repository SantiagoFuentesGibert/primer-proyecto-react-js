import './ItemDetailContainer.style.css';
import data from "../mockData";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListDetail from "../ItemDetailList/ItemDetailList";

const Productos = () => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        getProducts.then((response) => {
            setProductList(response);
        });
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data.filter((prod) => prod.id === id));
        }, 2000)
        
});

    return (
        <section>
            <ItemListDetail lista={productList}/>
        </section> 
    );
};

export default Productos;