import React, { Component } from 'react'
import Store,{actions,GETLOCATION} from "../redux/index"
import axios from "axios"
import $ from "jquery"
let getLocation=(com)=>{
  return class componentName extends Component {
    constructor(props){ 
      super(props)
      this.state={
          Com:null
      }
    }
    handleCity(city){
      let data=null
      this.props.city.some((item,index)=>{
          item.province.map((i,ind)=>{
              if(i.name.startsWith(city)){
                data=i;
              }
              return true
          });
      });

       Store.dispatch(actions[GETLOCATION](data))
          this.setState({
            Com:com
          })
    }
    componentWillMount(){
      if(this.props.locations==""){
         $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js").then(res=>{
            this.handleCity(remote_ip_info.city)
        })
      }else{
        this.setState({
          Com:com
        })
      }
    }
      render() {
        let {Com}=this.state
        return Com?<Com {...this.props}/>:null
      }
    }
}
export default getLocation;
 
