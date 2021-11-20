import React from "react"
 
const Display = (props) => {


    return (
        
        <div>
             <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Result: </span>
            </div>
                <input type="text" value={props.result}  class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>
        </div>
    )
}

export default Display