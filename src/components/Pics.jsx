import React from 'react';
import PropTypes from 'prop-types';
import './Pics.css';

function Pics(props){
    return(
        <div className="card pics">
            <div className="row">
                <div className="col">
                    <img src={props.imgURL} alt='img'/>
                </div>
                <div className="col">
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit pellentesque habitant morbi tristique senectus et.</p>
                    <a href='#' className='btn btn-primary'>Watch</a>
                </div>
            </div>
        </div>
    );
}

Pics.PropTypes = {
    title: PropTypes.string,
    imgURL: PropTypes.string
  };

export default Pics;