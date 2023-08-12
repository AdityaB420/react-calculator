import React, { useState } from "react";


const Calculator = ()=>{

    const [result,setResult]=useState("");
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    const addition=()=>{
        if(num1===''){
            setError("Num1 cannot be empty!");
            setSuccess('');
        }
        else if(isNaN(num1)){
            setError('Num1 is not a number!');
            setSuccess('');
        }
        else if(isNaN(num2)){
            setError('Num2 is not a number!');
            setSuccess('');
        }
        else if(num2===''){
            setError("Num2 cannot be empty!");
            setSuccess('');
        }
        else{
            setError('');
            setSuccess('Success!');
            setResult(Number(num1)+Number(num2));
        }
    }
    const minus=()=>{
        if(num1===''){
            setError("Num1 cannot be empty!");
            setSuccess('');
        }
        else if(isNaN(num1)){
            setError('Num1 is not a number!');
            setSuccess('');
        }
        else if(isNaN(num2)){
            setError('Num2 is not a number!');
            setSuccess('');
        }
        else if(num2===''){
            setError("Num2 cannot be empty!");
            setSuccess('');
        }
        else{
            setError('');
            setSuccess('Success!');
            setResult(Number(num1)-Number(num2));
        }
    }
    const multiply=()=>{
        if(num1===''){
            setError("Num1 cannot be empty!");
            setSuccess('');
        }
        else if(isNaN(num1)){
            setError('Num1 is not a number!');
            setSuccess('');
        }
        else if(isNaN(num2)){
            setError('Num2 is not a number!');
            setSuccess('');
        }
        else if(num2===''){
            setError("Num2 cannot be empty!");
            setSuccess('');
        }
        else{
            setError('');
            setSuccess('Success!');
            setResult(Number(num1)*Number(num2));
        }
    }
    const divide=()=>{
        if(num1===''){
            setError("Num1 cannot be empty!");
            setSuccess('');
        }
        else if(isNaN(num1)){
            setError('Num1 is not a number!');
            setSuccess('');
        }
        else if(isNaN(num2)){
            setError('Num2 is not a number!');
            setSuccess('');
        }
        else if(num2===''){
            setError("Num2 cannot be empty!");
            setSuccess('');
        }
        else{
            setError('');
            setSuccess('Success!');
            setResult(Number(num1)/Number(num2));
        }
    }

    return(
    <div className="canvas">
        <h1>React Calculator</h1>
        <input type="text" id="num1" onChange={(e)=>{setNum1(e.target.value)}} ></input>
        <input type="text" id="num2" onChange={(e)=>{setNum2(e.target.value)}}></input>
        <div className="buttons-list">
            <button className="buttons" onClick={addition}>+</button>
            <button className="buttons" onClick={minus}>-</button>
            <button className="buttons" onClick={multiply}>*</button>
            <button className="buttons" onClick={divide}>/</button>
        </div>
        <div className="message">
            {success && <div className="success-container"><p className="success">{success}</p><p className="result">Result: {result}</p></div>}
            {error && <div className="error-container"><p className="error">Error!</p><p className="error-msg">{error}</p></div>}
        </div>
    </div>)
}



export default Calculator;