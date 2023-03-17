import { useEffect,useState } from "react"


export const FormProduct=()=>{
    const id=201
    const urlGet='./json/product'+id+'.json'
    const[product,setProduct] =useState([])
    useEffect(()=>{
        fetch(urlGet)
            .then(data=>data.json())
            .then(product=>setProduct(product))

    },[urlGet])
    const nameChanged = (event) => {
        event.preventDefault()
        setProduct({
            ...product, name: String(event.target.value)
        })
    }
    const priceChanged = (event) => {
        event.preventDefault()
        setProduct({
            ...product, price: Number(event.target.value)
        })
    }
    const save=()=>{
        alert('Product saved')
    }
    return (
        <div>
        <form onSubmit={save}> 
            Öz: {product.id} <br />
            Ad: <input type="text" name="name" value={product.name || ''} onChange={(event)=> nameChanged(event) }></input><br />
            Eder : <input type="text" name="price" value={product.price || ''} onChange={(event)=> priceChanged(event) }></input><br />
            <input type="submit" value="sakla" ></input>
        </form>
        </div>
    )
}