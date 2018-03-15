import React from 'react';
import Pic from './Pic';
import App from '../App.js';

const PicList = (props) => {
  console.log(props.data.photo)
  let results = props.data.photo;
  console.log(results);
  let photosPic = results.map( photo =>
      <Pic url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
  );

  return(
    <ul className="pic-list">
      <Pic />
    </ul>
  );
}

export default PicList;
