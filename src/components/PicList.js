import React from 'react';
import Pic from './Pic';
import App from '../App.js';

const PicList = (props) => {
  console.log(props.data.photo)
  let results = props.data.photo;
  console.log(results);

  return(
    <ul className="pic-list">
      <Pic />
    </ul>
  );
}

export default PicList;
