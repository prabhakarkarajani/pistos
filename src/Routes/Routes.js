import React from "react";
import { Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Careers from "../components/Careers";
import Services from "../components/Services";
import Technology from "../components/Technology";
import PublicRoute from "./PublicRoutes";
const Routes = (
  <Switch>
    <PublicRoute exact path="/" component={() => <Home />} />
    <PublicRoute exact path="/About" component={About} />
    <PublicRoute exact path="/Contact" component={Contact} />
    <PublicRoute exact path="/Careers" component={Careers} />
    <PublicRoute exact path="/Services" component={Services} />
    <PublicRoute exact path="/Technology" component={Technology} />
  </Switch>
);

export default Routes;
