import React from 'react';
import '../css/jumbotron.css';
import bg from '../img/bg.png'

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <div className="intro-jumbotron">
                    <img className="intro-jumbotron-img" src={bg} alt="" />
                    <div className="jumbotron-caption">
                        <div>Englighten Your Future</div>
                        <div>Say Hello to the world's first scalable, decentralized blockchain cloud network. Future in the making. </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Jumbotron;
