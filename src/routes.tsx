import {Route, BrowserRouter} from "react-router-dom";
import React from "react";
import Home from "./pages/home";

const Routes =()=>{
    return(
        <BrowserRouter>
            <Route component={Home} exact path="/"/>
        </BrowserRouter>
    );
}

export default Routes;
