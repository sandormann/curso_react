import { Link } from "react-router";
import styles from './Item.module.css'

export default function Item( { item }){

    return(
        <>
            <div key={item.id} className={styles.card}>
                <figure className={styles.container__img}>
                    <img src={item.image} alt={item.title} className={styles.card__img} />
                </figure>
                <h2 className={styles.card__title}>{item.title}</h2>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <Link to={`/item/${item.id}`} className={styles.cta}>Ver más</Link>
            </div>
        </>
    )
}