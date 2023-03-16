
import { useParams } from "react-router-dom";

export default function NavigationTarget(){
    const {id}=useParams();
    const navigate=useNavigate();
    const getParametric=()=>{
        if(id){
            return(
                <div>
                    <h1>Değiştirgen : {id}</h1>
                </div>
            )
        }
    }
    const gotoSource=()=>{
        navigate("/source");
    }
    return(
        <div>
            <h1>erek</h1>
            {getParametric()}<br/>

        </div>
    )
}