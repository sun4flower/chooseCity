import React,{Component}from "react"
import { Route} from 'react-router-dom';
class Select extends Component{
    constructor(props){
        super(props);
        
    }
   
    render(){ 
       return (
            <div>
                select
            </div>
       )
        
    }
}
let routeSelect=()=>{
    return <Route path="/select" component={Select}/>
}
export default routeSelect;