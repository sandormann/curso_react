import { useEffect, useState } from "react"
import { useParams } from "react-router";
import styles from './products.module.css';
import ItemList from "../ItemList";


export default function Products(){

    const [items,setItems] = useState([]);
    const { id } = useParams()
    

    useEffect(() => {
        const allProducts = 'https://fakestoreapi.com/products';
        const byCategory =  `https://fakestoreapi.com/products/category/${id}`;
        
       
        fetch( id ? byCategory : allProducts )
            .then(res => res.json())
            .then(res => setItems(res))       
    },[id])
    return(
        <div className={styles.wrapper}>
            <h1 className={styles.gallery__title}>Productos</h1>
            <div className={styles.cards__container}>
                <ItemList items={items}/>
            </div>

        </div>
    )
}