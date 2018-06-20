import React, { Component } from 'react'
import { Route,Link } from "react-router-dom"
import getDate from "../HOC/getData"
import {connect} from "react-redux"
import Store,{actions,GETLOCATION} from "../redux/index"
import style from "../static/css/style1.css"
import getLocation from "../HOC/getlocation"
class Locations extends Component {
    constructor(props) {
        super(props)
        this.state={
            locations:this.props.locations,
            city:this.props.city,
            province:this.props.province
        }
    }
    fn(i){
        Store.dispatch(actions[GETLOCATION](i))
    }
    render() {
        let $el =this.state.city.map((item,index)=>{
                let $li=item.province.map((i,ind)=>{
                    let el=<span key={ind} onClick={()=>{this.fn(i)}}>{i.name}</span>
                    return el;
                })
                return<div key={index}>
                    <h4 ref={item.letter}>{item.letter}</h4>
                     <div>{$li}</div>
                </div>
            })
        return (
           
            <div className={style.wrap}>
               <nav><Link to="/">返回</Link>  选择城市</nav>
               <h4><span>你的上牌地址</span><Link to="/license" ><span>{this.props.license}</span>></Link></h4>
               <h5><span>您已选择城市</span><span></span></h5>
               <h3>
                   {
                       this.props.locations.map((item,index)=>{
                           return<span key={index} onClick={()=>{this.fn(item)}}>{item.name}</span>
                       })
                   }
               </h3>
               <section>
                   {
                       $el
                   }
               </section>
            </div>
        )
    }
}
let select=(state)=>{
    return state
}
let getDataHander=getDate(connect(select)(getLocation(Locations)),{url:"/api"})
let router2 = () => {
    return <Route exact path="/chooselocation" component={getDataHander} />
}
export default router2;
