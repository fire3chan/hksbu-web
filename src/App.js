import React from 'react';
import './css/App.css';
import Header from './component/Header';
import Jumbotron from './component/Jumbotron';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Jumbotron></Jumbotron>

      </div>
    </div>
  );
}

export default App;
