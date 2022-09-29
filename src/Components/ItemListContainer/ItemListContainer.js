import './ItemListContainer.style.css';
import data from "../mockData";
import { useEffect, useState } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const Productos = (props) => {
    const {category} = useParams();
    const [productList, setProductList] = useState([]);
/*     useEffect(() => {
        if(category) {
            const response = data.filter((response) => response.category === category)
            setProductList(response);
        }else {
            getProducts.then((response) => {
            setProductList(response);
        });
        }
    }, [category]);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000)
}); */

//Probando usar API firebase
const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');
    getDocs(querySnapshot).then((response) => {
        const data = response.docs.map((product) => {
            return { id: product.id, ...product.data()};
        });
        setProductList(data);
    });
};
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

export default Productos;