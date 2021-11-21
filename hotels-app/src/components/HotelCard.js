import React from "react"
import { Link } from "react-router-dom";

class HotelCard extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <>
             <div class="col-md-4" >
                 <div class="card mb-4 box-shadow text-center">
                 <img class="card-img-top img-fluid h-100" src={this.props.img}/>
                         <h5 class="card-title">{this.props.title}</h5>
                     
                     <Link to={`/${encodeURIComponent(this.props.title.split(" ").join("-"))}`}><button class="btn btn-success mt-4" >More Info</button></Link>
                 </div>
             </div>
         </>
      )
    }
  }
 


export default HotelCard


