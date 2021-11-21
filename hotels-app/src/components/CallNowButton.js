import React from "react"


class CallNowButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <a href={`${this.props.phone}`}>{this.props.phone}</a>
        )
    }
}

export default  CallNowButton