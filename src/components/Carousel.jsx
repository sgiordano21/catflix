import React from 'react';

function Carousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="https://b3ta.com/images/challenge/catmovies_large.jpg" alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://i.redd.it/p8452bh3ks631.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="https://i.pinimg.com/originals/18/c3/45/18c345c440a276f7a19661e55776fecb.jpg" alt="Third slide"/>
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    );
}

export default Carousel;