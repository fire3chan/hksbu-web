import React from 'react';
import './css/App.css';
import Header from './component/Header';
import Jumbotron from './component/Jumbotron';
import AboutUs from './component/AboutUs';
import RoadMap from './component/RoadMap';
import ContactUs from './component/ContactUs';

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
        <ContactUs></ContactUs>
      </div>
    );
  }
}


export default App;
