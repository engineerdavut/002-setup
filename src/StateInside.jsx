
import { useState } from "react";
export default function StateInside(){
    const b=5;
    const [condition,setCondition]=useState(false);
    const getCondition=()=>{
        if(condition){
            return <h1>olumlu</h1>
        }else{
            return <h1>olumsuz</h1>
        }
    }
    const conditionChanged=(event)=>{
        //setCondition(!condition);
        setCondition(event.target.checked);
    }
    return(
        <div>
            <h1>İçerisi</h1>
            <input type='checkbox' checked={condition} onChange={(event)=> conditionChanged(event) }></input>
            <button onClick={setCondition}>tıkla</button>
            {getCondition()}
            {b}
        </div>
    )
}