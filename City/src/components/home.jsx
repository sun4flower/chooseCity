import React,{Component}from "react"
import {Route} from 'react-router-dom';
import Heads from "./common/header";
import {connect} from "react-redux"
import getDate from "../HOC/getData"
import getLocation from "../HOC/getlocation"
import Store,{actions,GETLOCATION} from "../redux/index"
import $ from "jquery"
import {Link} from "react-router-dom"
import style from "../static/css/style1.css"
class Home extends Component{
    constructor(props){
        //console.log(props)
        super(props)
    }
    render(){ 
       return (
            <div>
                <Heads data={this.props}/>
                <nav className={style.nav}>
                    <Link to="/rank">智能排序</Link>
                    <Link to="/brand">品牌</Link>
                    <Link to="/select">筛选</Link>
                    <Link to="/price">价格</Link>
                </nav>
                
            </div>
       )
        
    }
}
let select=(state)=>{
    return state;
}
let hander=getDate(connect(select)(getLocation(Home)),{url:"/api"})
let router=()=>{
    return <Route exact path="/" component={hander}/>
}
export default router;