import React from 'react'
import HotelCard from './HotelCard'
import data from '../assets/hotels.json'
import Search from './Search'

class HotelsGallery extends React.Component{
    constructor(props){
        super(props)
        this.state = {searchQuery: ""}
    }
    setSearchQuery = (letter) =>{
        this.setState({searchQuery: letter})
    }
    render(){
        return(
            <>
         <h1 className = "text-center mt-3">All Hotels in Haifa</h1>
         <Search
            searchQuery={this.state.searchQuery}
            setSearchQuery={this.setSearchQuery}
        />
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.filter(hotel => {
                    if (this.state.searchQuery === ""){
                        return hotel
                    } else if (hotel.name.includes(this.state.searchQuery)){
                        return hotel
                    }
                }).map((hotel, index)=>{
                    return(
                        <HotelCard img={hotel.img} title={hotel.name} key={index}/>
                    )
                })}
            </div>
        </section>
        </>
        )
    }
}

export default HotelsGallery
