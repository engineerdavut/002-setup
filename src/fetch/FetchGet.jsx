import { useEffect,useParams} from "react"


export const FetchGet=()=>{
    const {id}=useParams();
    const urlGet='./json/product'+id+'.json'
    useEffect(()=>{
        fetch(urlGet)
            .then(data=>data.json())
            .then(product=>console.log(product))

    },[urlGet])
    return (
        <div>
            <h1>Git -Getir -edin</h1>
        </div>
    )
}