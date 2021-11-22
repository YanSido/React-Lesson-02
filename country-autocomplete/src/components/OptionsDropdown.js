import React from "react"
import data from "../assets/Countries.json"
import Option from "./Option"

const OptionsDropdown = (props) => {
    return (
        <>
        {props.showCountries && <section id = "option-section" >
            <div id="options" className="row justify-content-center" >
                {data.filter(country => {
                    if (props.searchQuery === ""){
                        return country
                    } else if (country.name.toLowerCase().includes(props.searchQuery.toLowerCase())){
                        return country
                    }
                }).map((country, index)=>{
                    return(
                        <Option name={country.name} code={country.code} setShowClear={props.setShowClear} setShowCountries={props.setShowCountries} setSearchQuery={props.setSearchQuery} index={index}/>
                    )
                })}
            </div>
        </section>}
        </>
    )
}

export default OptionsDropdown