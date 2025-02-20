import { useState, useEffect } from 'react';
import { useParams } from 'react-router'

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
        <>
            <div>Producto</div>
            <h2>{detail?.title}</h2>
            <img src={detail?.image}/>
            <p>{detail?.description}</p>
            <p>$ {detail?.price}</p>
        </>
    )
}