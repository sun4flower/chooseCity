import React,{Component}from "react"
import { Route} from 'react-router-dom';
class Price extends Component{
    constructor(props){
        super(props);
        
    }
   
    render(){ 
       return (
            <div>
            price
            </div>
       )
        
    }
}
let routePrice=()=>{
    return <Route path="/price" component={Price}/>
}
export default routePrice;