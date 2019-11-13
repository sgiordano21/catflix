import React from 'react';
import NavBar from './NavBar';
import './App.css';
import ContentList from './ContentList';


function App() {
    return (
      <div>
        <h1>Catflix</h1>
        <NavBar/>
        <hr/>
        <div>
        <ContentList/>
        </div>
      </div>
    );
  }
  
  export default App;