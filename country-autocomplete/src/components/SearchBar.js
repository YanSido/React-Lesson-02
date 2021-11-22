import React from "react"

const SearchBar = ({searchQuery, setSearchQuery, setShowCountries}) => {
    
    
    return (
        <div onFocus={()=>{setShowCountries(true);}} >
            <form class="form-inline row justify-content-center text-center">
            <input class="form-control mr-sm-2 text-center" value={searchQuery} onInput={e => {setSearchQuery(e.target.value); setShowCountries(true) }} placeholder="Search Country" aria-label="Search"/>
            </form>
        </div>
    )
}

export default SearchBar