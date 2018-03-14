import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Button, Grid} from 'react-bootstrap';

const Header = () => (
  <header className="App-header">
      <Grid>
        <Button bsStyle="primary" bsSize="lg" className="search-buttons" >Steve Yzerman</Button>
        <Button bsStyle="primary" bsSize="lg" className="search-buttons">Miguel Cabrera</Button>
        <Button bsStyle="primary" bsSize="lg" className="search-buttons">Barry Sanders</Button>
      </Grid>

  </header>

);

export default Header;
