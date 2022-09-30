import './ItemDetailContainer.style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Productos = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    
    const getProducts = () => {
        const db = getFirestore();
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc)
        .then((res) => {
            setProductList(res.data())
        }).finally(() => {setLoading(false)});
};

    useEffect(() => {
        getProducts();
    }, [id]);

    return (

        <section>
            {loading ? <p>Cargando...</p> : <ItemDetail product={productList} />}
        </section> 
    );
};

export default Productos;