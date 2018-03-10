import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Button, Grid} from 'react-bootstrap';

import SearchForm from './SearchForm';

const Header = () => (
  <header className="App-header">
      <SearchForm />
      <Grid>
        <Button bsStyle="primary" bsSize="medium" className="search-buttons" >Steve Yzerman</Button>
        <Button bsStyle="primary" bsSize="medium" className="search-buttons">Miguel Cabrera</Button>
        <Button bsStyle="primary" bsSize="medium" className="search-buttons">Barry Sanders</Button>
      </Grid>

  </header>

);

export default Header;
