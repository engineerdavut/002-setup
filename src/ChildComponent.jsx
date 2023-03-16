import { PriceContext } from "./GrandParentComponent";
import React,{useContext} from 'react'

export default function ChildComponent(){
    const price=useContext(PriceContext)
    return(
        <div>
          
            <h2>{price}</h2>
            <PriceContext.Consumer >
                {
                    context=><strong>Eder :{context}</strong>
                }
            </PriceContext.Consumer>
            <h1>Child Component</h1>
        </div>
    )
}