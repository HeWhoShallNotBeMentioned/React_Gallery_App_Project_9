import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//App components
import './App.css';
import Header from "./Header";
import Home from "./Home";

const App = () => (

  <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />

      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
