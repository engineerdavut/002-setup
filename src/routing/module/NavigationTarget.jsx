
import { useParams } from "react-router-dom";

export default function NavigationTarget(){
    const {id}=useParams();
    const getParametric=()=>{
        if(id){
            return(
                <div>
                    <h1>Değiştirgen : {id}</h1>
                </div>
            )
        }
    }
    return(
        <div>
            <h1>erek</h1>
            {getParametric()}
        </div>
    )
}