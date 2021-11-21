import React from "react"

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
                     <button class="btn btn-success" >More Info</button>
                 </div>
             </div>
         </>
      )
    }
  }
 
// const HotelCard = (props) => {


//     return (
        
//         <>
//             <div class="col-md-4" >
//                 <div class="card mb-4 box-shadow text-center">
//                 <img class="card-img-top img-fluid h-100" src={props.img}/>
//                         <h5 class="card-title">{props.title}</h5>
//                     <button class="btn btn-success" >More Info</button>
//                 </div>
//             </div>
//         </>
//     )
// }

export default HotelCard


