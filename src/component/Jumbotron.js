import React from 'react';
import '../css/jumbotron.css';
import bg from '../img/bg.png'

class Jumbotron extends React.Component {
    render() {
        return (
            <div>
                <a name="Home"></a>
                <div className="intro-jumbotron">
                    <img className="intro-jumbotron-img" src={bg} alt="" />
                    <div className="jumbotron-caption">
                        <div>Englighten Your Future</div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Jumbotron;
