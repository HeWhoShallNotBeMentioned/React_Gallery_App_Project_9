import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//App components
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const App = () => (

  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
