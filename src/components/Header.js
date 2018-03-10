import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Button, Grid} from 'react-bootstrap';

import SearchForm from './SearchForm';

const Header = () => (
  <header className="App-header">
      <SearchForm />
      <Grid>
        <Button bsStyle="primary" bsSize="medium">Steve Yzerman</Button>
        <Button bsStyle="primary" bsSize="medium">Miguel Cabrera</Button>
        <Button bsStyle="primary" bsSize="medium">Barry Sanders</Button>
      </Grid>
    <h1 className="App-title">Welcome to React</h1>
  </header>

);

export default Header;
