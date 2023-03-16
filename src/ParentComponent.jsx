import { PriceContext } from "./GrandParentComponent";
import React,{useContext} from 'react'
import ChildComponent from "./ChildComponent";

export default function ParentComponent({quantity}){
    const price=useContext(PriceContext)
    return(
        <div>
            <h1>{quantity}</h1>
            <h2>{price}</h2>
            <PriceContext.Consumer >
                {
                    context=><strong>Eder :{context}</strong>
                }
            </PriceContext.Consumer>
            <h1>Parent Component</h1>
            <ChildComponent />
        </div>
    )
}