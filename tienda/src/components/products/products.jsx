import { useEffect, useState } from "react"
import { useParams } from "react-router";
import styles from './products.module.css';
import { Link } from "react-router";

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
                {items.map(item => (
                    <div key={item.id} className={styles.card}>
                        {/* <img src={item.image} alt={item.title} /> */}
                        <h2 className={styles.card__title}>{item.title}</h2>
                        <p>{item.category}</p>
                        <p>${item.price}</p>
                        <Link to={`/item/${item.id}`} className={styles.cta}>Ver más</Link>
                    </div>
                ))}
            </div>

        </div>
    )
}