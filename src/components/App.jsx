import React from 'react';
import NavBar from './NavBar';
import './App.css';
import ContentList from './ContentList';
import SuggestionsList from './SuggestionsList';
import MovieCard from './MovieCard';
import Carousel from './Carousel';


function App() {
    return (
      <div>
          <h1>Catflix</h1>
          <NavBar/>
        <hr/>
        <div className="container">
        <div>
            <h5>Featured</h5>
            <Carousel/>
          </div>
          <div>
            <h5>Thrillers</h5>
            <ContentList/>
          </div>
          <div>
            <h5>Comedies</h5>
            <SuggestionsList/>
          </div>
          <div>
            <h5>New Titles</h5>
            <MovieCard/>
          </div>

        </div>
      </div>
    );
  }
  
  export default App;