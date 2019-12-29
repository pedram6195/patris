import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import "pace-js";
import "pace-js/themes/blue/pace-theme-minimal.css";

import "../css/fontiran.css";
import "../css/app.scss";

import routes from "../config/routes";

import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Navbar />
        <Content>
          <Switch>
            {routes.map(route => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={route.path}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
