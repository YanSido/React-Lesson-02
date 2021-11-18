import React from "react"

const Search = ({searchQuery, setSearchQuery}) => {

    return (
        <div >
            <form class="form-inline row justify-content-center">
            <input class="form-control mr-sm-2 w-25 text-center" value={searchQuery} onInput={e => setSearchQuery(e.target.value)} type="search" placeholder="Search Item" aria-label="Search"/>
            </form>
        </div>
    )
}

export default Search