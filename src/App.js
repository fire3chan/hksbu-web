import React from 'react';
import './css/App.css';
import Header from './component/Header';
import Jumbotron from './component/Jumbotron';
import AboutUs from './component/AboutUs';
import RoadMap from './component/RoadMap';
import JoinUs from './component/JoinUs';
import BackToTop from './component/BackToTop';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Jumbotron></Jumbotron>
        <AboutUs></AboutUs>
        <RoadMap></RoadMap>
        <JoinUs></JoinUs>
        <BackToTop ></BackToTop>
      </div>
    );
  }
}


export default App;
