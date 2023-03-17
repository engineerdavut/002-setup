import { useEffect,useState } from "react"

const urlList='./json/products.json'

export const Project=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch(urlList)
      .then(data=>data.json())
      .then(products=>setProducts(products))

    },[urlList])
    return (
        <div>
        {
            products.map(product=>
                <li key={product.id} style={{textAlign:'left',fontWeight:'bold'}}> 
                    {product.id}<br/>
                    {product.name}<br/>
                    {product.price}<br/>
                </li>
                
            )
        }
            <h1>Git -Getir -Dizelge</h1>
        </div>
    )
}