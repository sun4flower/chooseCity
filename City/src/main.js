import React, { Component } from 'react';
import ReactDom from 'react-dom';
import "./static/css/style.css"
import App from "./components/app"
import Router from "./router/index"
import Store from "./redux/index"
import {Provider} from "react-redux"
ReactDom.render(<Provider store={Store}>< Router/></Provider>, document.getElementById("app"))