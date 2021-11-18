import React from 'react'
import Itemcard from './Itemcard'
import data from './data'
import Search from './Search'
import { useState } from "react"


const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
        <h1 className = "text-center mt-3">All Products</h1>
        <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data.productData.filter(item => {
                    if (searchQuery === ""){
                        return item
                    } else if (item.title.toLowerCase().includes(searchQuery.toLowerCase())){
                        return item
                    }
                }).map((item, index)=>{
                    return(
                        <Itemcard img={item.img} title={item.title} price={item.price} desc={item.desc} item={item} key={index}/>
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Home
