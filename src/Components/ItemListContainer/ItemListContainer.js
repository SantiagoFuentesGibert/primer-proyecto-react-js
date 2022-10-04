import './ItemListContainer.style.css';
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = (props) => {
    const {category} = useParams();
    const [productList, setProductList] = useState([]);

const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');
    
    if (category) {
        const queryFilter = query(querySnapshot, where("categoryId", "==", category))
        getDocs(queryFilter).then((response) => {
            const data = response.docs.map((product) => {
                return { id: product.id, ...product.data()};
            });
            setProductList(data);
        });
    }else{
        getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((product) => {
            return { id: product.id, ...product.data()};
        });
        setProductList(data);
    });
    }};

useEffect(() => {
    getProducts();
}, [category])


    return (
    <section className='productos'>
            <h2 className='productos-title tracking-in-contract '>{props.titulo}</h2>
            <section>
                <ItemList lista={productList}/>
            </section>
        </section> 
    );
};

export default ItemListContainer;