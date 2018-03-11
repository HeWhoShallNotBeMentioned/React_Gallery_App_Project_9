import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import apiKey from "../config";

import GifList from './Home';

export default class Retrieve extends Component {

  constructor() {
   super();
   this.state = {
     pics: [],
     loading: true
   };
 }

componentDidMount() {
 this.performSearch();
}

performSearch = (query = 'miguel cabrera') => {
 axios.get(`https://api.flickr.com/services/rest/?text=${query}&limit=24&api_key=${apiKey}`)
 .then(response => {
   this.setState({
     pics: response.data.data,
     loading: false
   });
 })
 .catch(error => {
   console.log('Error fetching and parsing data', error);
 });
}


}
