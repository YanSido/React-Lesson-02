import React from "react"


class Search extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div >
                <form class="form-inline row justify-content-center">
                    <input class="form-control mr-sm-2 w-50 text-center" value={this.props.searchQuery} onInput={e => this.props.setSearchQuery(e.target.value)} type="search" placeholder="Search Hotel" aria-label="Search"/>
                </form>
            </div>
        )
    }
}

export default Search