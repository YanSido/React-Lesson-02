import React from "react"

const Option = (props) => {
    
    
    return (
        <div 
        onClick={(e)=>{
            props.setShowClear(true);
            props.setShowCountries(false)
            if (e.target.childNodes[1]) props.setSearchQuery(e.target.childNodes[1].value)
            else props.setSearchQuery(e.target.parentNode.childNodes[1].value)
            }
        }
        id = "country-option">
        <img
        
        loading="lazy"
        width="20"
        src={`https://flagcdn.com/w20/${props.code.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/w40/${props.code.toLowerCase()}.png 2x`}
        alt=""
      />
        <option value={props.name}>{props.name} ({props.code})</option>
        </div>
    )

}

export default Option