import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {} from 'react-bootstrap';

//App components
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import SearchForm from './components/SearchForm';
import NotFound from "./components/NotFound";
import Retreive from "./components/Retrieve";
import Navigation from "./components/Navigation";
import PicList from "./components/PicList";
import axios from 'axios';

import apiKey from "./config";


export default class App extends Component {

  constructor() {
   super();
   this.state = {
     pics: [],
     loading: true
   };
 }

 componentDidMount(query) {

   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
   .then(response => {
     this.setState({
       pics: response.data.photos,
       loading: false
     });
   })
   .catch(error => {
     console.log('Error fetching and parsing data', error);
   });
 }



render() {

    return (
      <div>
        <div className="">
          <Header />
          <div className="">
            <h1 className="">Pictues</h1>
            <SearchForm />
          </div>
        </div>
        <div className="">
          <PicList data={this.state.pics}/>
        </div>
      </div>
)}};
