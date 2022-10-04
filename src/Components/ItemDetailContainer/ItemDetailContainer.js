import './ItemDetailContainer.style.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
            const getProducts = () => {
            const db = getFirestore();
            const queryDoc = doc(db, 'items', id);
            getDoc(queryDoc)
            .then((res) => {
                const item = {...res.data(), id: res.id};
                setItem(item);
            }).finally(() => {setLoading(false)});
            };
        getProducts();
    }, [id]);

    return (
        <section className='itemDetailContainer'>
            {loading ? <p>Cargando...</p> : <ItemDetail product={item} />}
        </section> 
    );
};

export default ItemDetailContainer;