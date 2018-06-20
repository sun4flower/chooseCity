import React, { Component } from 'react'
import axios from "axios"
let getDate = (com,config) => {
   return class componentName extends Component {
        constructor(props){
            super(props)
            Object.assign(this,config)
            this.state={
                Com:null,
                city:null,
                province:null,
                cityprovince:null
            }
        }
        componentWillMount(){
            axios.get(this.url).then(res=>{
                this.setState({
                    city:res.data.citys,
                    province:res.data.provinceArr,
                    cityprovince:res.data.city,
                    Com:com
                })
            })
        }
        render() {
            let {Com}=this.state;
            
            return Com?<Com {...this.state}/>:null
        }
    }
}
export default getDate;
