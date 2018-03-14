import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";

export default class App extends Component {

render() {
  return  (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  )
  }
}
