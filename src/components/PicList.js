import React from 'react';
import Pic from './Pic';
import App from '../App.js';

const PicList = (props) => {

  let results = props.data;
  console.log("results:  ", results);
  let photos = results.map( pic =>
      <Pic url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id} />
    );

  return(
    <ul className="pic-list">
      {photos}
    </ul>
  );
}

export default PicList;
