import React,{Component}from "react"
import { Route} from 'react-router-dom';
class Rank extends Component{
    constructor(props){
        super(props);
        
    }
   
    render(){ 
       return (
            <div>
             rank
            </div>
       )
        
    }
}
let routeRank=()=>{
    return <Route path="/rank" component={Rank}/>
}
export default routeRank;