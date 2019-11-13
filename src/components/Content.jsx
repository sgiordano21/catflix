import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

function Content(props){
    return(
    <div className='card'>
        <div className='card-body'>
        <img src={props.imgURL} className='card-img' alt='img'/>
          <h5 className='card-text'>{props.name}</h5>   
      <a href='#' className='btn btn-primary'>Watch</a>
        </div>
    </div>
    );
}

Content.PropTypes = {
    name: PropTypes.string,
    imgURL: PropTypes.string
  };

  export default Content;