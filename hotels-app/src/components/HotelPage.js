import React from "react"
 
class HotelPage extends React.Component {
    render() {
      return (
        <>
            <div class="card">
                <img class="card-img-top img-fluid h-100" src={this.props.img} alt="Card image cap"/>
                <div class="card-body text-center">
                    <h5 class="card-title">{this.props.name}</h5>
                    <p class="card-text">{"רחוב: " + this.props.street + " " + this.props.house}</p>
                    <p class="card-title">{"טלפון: " + this.props.phone}</p>
                </div>
            </div>
         </>
      )
    }
  }

export default HotelPage
