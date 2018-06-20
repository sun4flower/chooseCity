import {GETLOCATION,SETLICENSE} from "./actions_type"
export let actions={
    [GETLOCATION](text){
        return{
            type:GETLOCATION,
            text:text
        }
    },
    [SETLICENSE](text){
        return{
            type:SETLICENSE,
            text:text
        }
    }
}