import React from "react"

const Buttons = ({handleClick}) => {



    return (
        
        <div className="col-11 col-md-6 col-lg-1 mx-0 mb-4" role="toolbar">
        <button onClick={(e) => {handleClick(e)}} name = "0" id = "zero" className="btn btn-secondary">0</button>
        <button onClick={(e) => {handleClick(e)}} name = "1" id = "one" className="btn btn-secondary">1</button>
        <button onClick={(e) => {handleClick(e)}} name = "2" id = "two" className="btn btn-secondary">2</button>
        <button onClick={(e) => {handleClick(e)}} name = "3" id = "three" className="btn btn-secondary">3</button>
        <button onClick={(e) => {handleClick(e)}} name = "4" id = "four" className="btn btn-secondary">4</button>
        <button onClick={(e) => {handleClick(e)}} name = "5" id = "five" className="btn btn-secondary">5</button>
        <button onClick={(e) => {handleClick(e)}} name = "6" id = "six" className="btn btn-secondary">6</button>
        <button onClick={(e) => {handleClick(e)}} name = "7" id = "seven" className="btn btn-secondary">7</button>
        <button onClick={(e) => {handleClick(e)}} name = "8" id = "eight" className="btn btn-secondary">8</button>
        <button onClick={(e) => {handleClick(e)}} name = "9" id = "nine" className="btn btn-secondary">9</button>
        <button onClick={(e) => {handleClick(e)}} name = "+" id = "add" className="btn btn-secondary">+</button>
        <button onClick={(e) => {handleClick(e)}} name = "-" id = "subtract" className="btn btn-secondary">-</button>
        <button onClick={(e) => {handleClick(e)}} name = "*" id = "multiply" className="btn btn-secondary">*</button>
        <button onClick={(e) => {handleClick(e)}} name = "/" id = "divide" className="btn btn-secondary">/</button>
        <button onClick={(e) => {handleClick(e)}} name = "." id = "decimal" className="btn btn-secondary">.</button>
        <button onClick={(e) => {handleClick(e)}} name = "clear" id = "clear" className="btn btn-secondary">C</button>
        <button onClick={(e) => {handleClick(e)}} name = "=" id = "equals" className="btn btn-secondary">=</button>

        </div>
    )
}

export default Buttons