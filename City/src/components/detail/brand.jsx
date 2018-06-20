import React,{Component}from "react"
import { Route} from 'react-router-dom';
class Brand extends Component{
    constructor(props){
        super(props);
        
    }
   
    render(){ 
       return (
            <div>
            brand
            </div>
       )
        
    }
}
let routeBrand=()=>{
    return <Route path="/brand" component={Brand}/>
}
export default routeBrand;