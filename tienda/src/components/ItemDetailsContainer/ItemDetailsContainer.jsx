import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import styles from './ItemDetailsContainer.module.css'

export default function ItemDetailsContainer(){
    const [ detail,setDetail ] = useState();
    const { id } = useParams();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then( res => res.json())
        .then( res => setDetail(res))
        .then(console.log)
    },[id])

    return(
        <section className={styles.product_description}>
            <h2 className={styles.title_description}>{detail?.title}</h2>

            <div className={styles.product_container}>
                <figure className={styles.product_image}>
                    <img src={detail?.image} className={styles.product_img} />
                </figure>

                <div className={styles.product_text}>
                    <p className={styles.description}>{detail?.description}</p>
                    <p className={styles.price}>$ {detail?.price}</p>
                </div>
            </div>
        </section>
    )
}