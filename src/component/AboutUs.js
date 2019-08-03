import React from 'react';
import '../css/aboutUs.css';
import { about } from '../content/About.json';

class AboutUs extends React.Component {

    render() {
        return (
            <div className="about-us container">
                <div className="row about-title-row">
                    <div className="col-12 col-md-6">
                        <div className="about-title">{about.title}</div>
                        <div className="about-title-caption">{about.titleCaption}</div>
                    </div>
                    <div className="col-12 col-md-6 about-title-side">
                        {about.sideContent}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="about-desc">
                            <ul>
                                {about.description.map((content) =>
                                    <li>
                                        {content}
                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default AboutUs;
