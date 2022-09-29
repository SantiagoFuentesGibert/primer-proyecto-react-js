import './ItemDetailContainer.style.css';
import data from "../mockData";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListDetail from "../ItemDetailList/ItemDetailList";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Productos = () => {
    const [productList, setProductList] = useState([]);
    const { id } = useParams();
    const db = getFirestore();

    const getProducts = () => {
        const queryDoc = doc(db, 'item', id);

        getDoc(queryDoc)
        .then((res) => {
            setProductList(res.data())
        });
};

    useEffect(() => {
        getProducts();
    }, [id]);

    return (
        <section>
            <ItemListDetail lista={productList}/>
        </section> 
    );
};

export default Productos;