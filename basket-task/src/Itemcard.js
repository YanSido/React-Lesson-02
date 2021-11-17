import React from "react"
import { useCart } from "react-use-cart"

const Itemcard = (props) => {
    const { addItem } = useCart()

    return (
        <div className = "col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img class="card-img-top img-fluid h-100" src={props.img}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{props.title}</h5>
                        <h5 class="card-text">{props.desc}</h5>
                        <button class="btn btn-success">Add to Basket</button>
                    </div>
            </div>
        </div>
    )
}

export default Itemcard