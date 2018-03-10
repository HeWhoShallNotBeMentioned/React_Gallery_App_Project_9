import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ButtonToolbar, Button} from 'react-bootstrap';

const Header = () => (
  <header className="App-header">
    <div>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large">Large button</Button>
        <Button bsStyle="primary" bsSize="large">Default button</Button>
        <Button bsStyle="primary" bsSize="large">Default button</Button>

      </ButtonToolbar>
    </div>

    <h1 className="App-title">Welcome to React</h1>
  </header>

);

export default Header;
