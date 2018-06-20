import React, { Component } from 'react'
import {Link} from "react-router-dom"
import style from "../../static/css/style1.css"
import getLocation from "../../HOC/getlocation"
 class Heads extends Component {
   constructor(props){
     super(props)
     this.state={
       location:this.props.data.locations[0].name
     }
   }
  render() {
    return (
      <div className={style.header}> 
          <Link to="/chooselocation">{this.state.location}</Link>
          <span>></span>
      </div>
    )
  }
}
export default Heads;
