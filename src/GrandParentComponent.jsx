import ParentComponent from "./ParentComponent"

import React,{createContext, useState} from "react";
export const PriceContext=createContext('100')
export const LoginContext=createContext('login degil')
export default function GrandParentComponent(){
    const quantity=10;
    const price=100;
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const loginInfo={ username:username,password:password}
    const login=()=>{
        
    }
    return(
        <div>
            <input type="text" name="username" value={username || ''} ></input>
            <input type="text" name="password" value={password || ''} ></input>
            <button onClick={login}>Login</button>
            <PriceContext.Provider value={price}>

            </PriceContext.Provider>
            <LoginContext.Provider value={loginInfo}>

            </LoginContext.Provider>
            <h1>GrandParent Component</h1>
            <ParentComponent quantity={quantity}/>
        </div>
    )
}