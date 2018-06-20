import {GETLOCATION,SETLICENSE} from "./actions_type"
import initstate from "./state"
let reducer=(state=initstate,action)=>{
    let {type,text}=action;
    switch(type){
        case GETLOCATION:{
            let states=true;
            let indexs=null;
            if(state.locations.length>0){
                state.locations.some((item,index)=>{
                    if(item.id==text.id){
                        states=false;
                        indexs=index;
                        return;
                    }
                })
            }
            if(states){
                let arr=[...state.locations,text];
                return Object.assign({},state,{locations:arr})
            }else{
               let arr=[...state.locations]
               if(arr.length>1){
                     arr.splice(indexs,1)
               }
              
               return Object.assign({},state,{locations:arr})
            }
           
        }
        case SETLICENSE:{
            console.log(text)
            return Object.assign({},state,{license:text})
        }
        default:
        return state;
    }

}
export default reducer;