import React from 'react';
import '../css/aboutUs.css';

class AboutUs extends React.Component {

    render() {
        return (
            <div className="about-us container">
                <div className="row about-title-row">
                    <div className="col-6">
                        <div className="about-title">About</div>
                        <div className="about-title-caption">Why choosing Crypton?</div>
                    </div>
                    <div className="col-6 about-title-side">
                        Automatic matching of buyers &amp; sellers via unique artificial intelligence approach.
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="about-desc">
                            Crypton is a block chain based marketplace, where buyers &amp; sellers meet to carry out operations involving digital goods &amp; assets with crypto currency transactions. The unique advantage here is an automatic matching of users, basing on artificial intelligence approach. It is a first ever artificial intelligence marketplace in the world, combining traditional and smart contract, block chain, future oriented ideas of connecting people and performing operations by analyzing users preferences.
                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default AboutUs;
