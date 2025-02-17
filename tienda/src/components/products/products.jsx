import { useEffect, useState } from "react"
import styles from './products.module.css'

export default function Products(){

    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setItems(res))        
    },[])
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
                        <a className={styles.cta} href="#">Ver más</a>
                    </div>
                ))}
            </div>

        </div>
    )
}