import React from 'react';
import PropTypes from 'prop-types';
import './Content.css';

function Content(props){
    return(
    <div className='card content'>
        <div className='card-body'>
        <img src={props.imgURL} className='card-img' alt='img'/>
          <h5 className='card-text'>{props.name}</h5>   
      <a href='https://www.youtube.com/watch?v=2iKvsqOiLWc' target="_blank" className='btn btn-primary'>Watch</a>
        </div>
    </div>
    );
}

Content.PropTypes = {
    name: PropTypes.string,
    imgURL: PropTypes.string
  };

  export default Content;