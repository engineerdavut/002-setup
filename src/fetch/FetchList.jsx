import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const urlList='./json/products.json'


export const FetchList=()=>{
    const [products,setProduct]=useState([])
    useEffect(()=>{
        fetch(urlList)
            .then(res=>res.json())
            .then(res=>setProduct(res))

    },[urlList])
    return (
        <div>
{products.map(product =>{
return(
<div>
{product.id + " " + product.name + " " + product.price}
</div>
)
})}
        </div>
    )
}