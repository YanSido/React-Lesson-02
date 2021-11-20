import React from "react"
 
const Display = (props) => {


    return (
        
        <input id = "input" type="text" value={props.result}  aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    )
}

export default Display