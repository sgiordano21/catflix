import React from 'react';
import PropTypes from 'prop-types';
import './Suggestions.css';

function Suggestions(props){
    return(
        <div className='card suggestions'>
        <div className='card-body'>
        <img src={props.imgURL} className='card-img' alt='img'/>
          <h5 className='card-text'>{props.name}</h5>   
      <a href='https://www.youtube.com/watch?v=FtSd844cI7U' target='_blank' className='btn btn-primary'>Watch</a>
        </div>
    </div>
    );
}

Suggestions.PropTypes = {
    name: PropTypes.string,
    imgURL: PropTypes.string
  };

  export default Suggestions;