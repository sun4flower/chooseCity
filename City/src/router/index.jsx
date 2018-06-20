import React from "react"

import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom"
import App from "../components/app"
import Home from "../components/home"
import Choose from "../components/chooseLocation"
import License from "../components/chooselicenseplate"
import Brand from "../components/detail/brand"
import Price from "../components/detail/price"
import Rank from "../components/detail/rank"
import Select from "../components/detail/select"

let router=()=>{
    return(<Router>
        <App>
            <Home/>
            <Choose/>
            <License/>
            <Brand/>
            <Price/>
            <Rank/>
            <Select/>
        </App>
    </Router>
    ) 
}
export default router;