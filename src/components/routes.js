import React from 'react'
import { Route, Switch } from "react-router-dom";
import Maidapp from "./maidapp";
import Home from "./home/home";
import Service from "./service";
import About from "./about";
import Contact from "./contact_us";
import Pagenotfound from "./404";
import Termsprivacy from "./termsprivacy";
import Booking from "./booknow"; 
const routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/service" component={Service} />
            <Route path="/maidapp" component={Maidapp} />
            <Route path="/terms-privacy" component={Termsprivacy} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/book-now" component={Booking} />
            <Route path="*" component={Pagenotfound} />
        </Switch>
    )
}

export default routes
