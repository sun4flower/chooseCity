import {createStore,applyMiddleware,combineReducers} from "redux"
import thunkMiddleWare from "redux-thunk"
export * from "./actions_type"
export * from "./actions"
import reducer from "./reducer"

export default new createStore(reducer,applyMiddleware(thunkMiddleWare))