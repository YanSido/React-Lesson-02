import React from "react"
import data from "../assets/Countries.json"
import Option from "./Option"
import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import ToggleButton from "./ToggleButton"
import ClearButton from "./ClearButton"

const OptionsDropdown = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showCountries, setShowCountries] = useState(false);
    const [showClear, setShowClear] = useState(false);
    

    return (
        <>
        <h1 className = "text-center mt-3">All Countries</h1>
        <div >
        <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setShowCountries={setShowCountries}
        />

        <ToggleButton
        showCountries={showCountries}
        setShowCountries={setShowCountries}
        />
        </div>
        

        {showClear && <ClearButton
        setSearchQuery={setSearchQuery}
        setShowClear={setShowClear}
        />}

        {showCountries && <section id = "option-section" >
            <div id="options" className="row justify-content-center" >
                {data.filter(country => {
                    if (searchQuery === ""){
                        return country
                    } else if (country.name.toLowerCase().includes(searchQuery.toLowerCase())){
                        return country
                    }
                }).map((country, index)=>{
                    return(
                        <Option name={country.name} code={country.code} setShowClear={setShowClear} setShowCountries={setShowCountries} setSearchQuery={setSearchQuery} index={index}/>
                    )
                })}
            </div>
        </section>}
        </>
    )

}

export default OptionsDropdown