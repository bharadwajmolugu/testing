import React,{useState,useEffect} from 'react';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';

const Form=()=>{


    const [number,setNumber]=useState(0);
    const incrementHandler=()=>{
        setNumber(number+1)
    }
    const decrementHandler=()=>{
        setNumber(number-1)
    }



    return(
        <div>
            <h1>{number}</h1>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    )
}

export default Form;