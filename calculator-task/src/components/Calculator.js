import React, { useState } from "react"
import Buttons from "./Buttons"
import Display from "./Display"
/*eslint-disable no-eval */
 
const Calculator = (props) => {

    const [result, setResult] = useState("0")

    const checkRefresh = () =>{
        if (window.performance) {
            if (performance.navigation.type === 1) return true 
            else return false
          }
    }
    
    const checkValidation = (ex) =>{
        try{
            eval(ex)
            if (ex.split("/")[0] === "" || ex.split("/")[1] === "")return false
                
            if (ex.split("*")[0] === "" || ex.split("*")[1] === "")return false
                
            if (ex.split("+")[0] === "" || ex.split("+")[1] === "")return false
                
            if (ex.split("-")[0] === "" || ex.split("-")[1] === "")return false
                
            return true
        }catch{
            return false
        }
        
        
        
    }

    const handleClick = (e) =>{
        if (checkRefresh()) setResult("0")

        if (e.target.name === "clear") setResult("0")
        else {
            if (result === "0") setResult(e.target.name)
            else setResult(result.concat(e.target.name))
            
        }

        if (e.target.name === "=") {
            if (checkValidation(result)) setResult(String(eval(result)))
            else setResult("Wrong Syntax")
            
        }
    }

    return (
        <>
        <Display result = {result}/>
        <Buttons handleClick={handleClick}/>
        </>
    )
}

export default Calculator