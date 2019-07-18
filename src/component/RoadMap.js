import React from 'react';
import '../css/roadMap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class RoadMap extends React.Component {

    render() {
        return (
            <div className="road-map">
                <div className="road-map-title">Road Map</div>
                <div className="road-map-desc">
                    We are a company with vibrant past and the well thought-out plan to build the bright future.
                </div>
                <div className="time-line d-none d-md-block">
                    <div id="content">
                        <ul class="timeline">
                            <li class="event" data-date="65Million B.C.">
                                <h3>Dinosaurs Roamed the Earth</h3>
                                <p>RAWWWWWWRRR </p>
                            </li>
                            <li class="event" data-date="2005">
                                <h3>Creative Component Launched</h3>
                                <p>"We can be all things to all people!" </p>
                            </li>
                            <li class="event" data-date="November 15, 2018">
                                <h3>Squareflair Today</h3>

                                <p>"We design and build from scratch!" </p> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
                                <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br /></p>

                                <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="time-line d-block d-md-none">
                    <div id="mobile-content">
                        <ul class="timeline">
                            <li class="event" data-date="65Million B.C.">
                                <h3>Dinosaurs Roamed the Earth</h3>
                                <p>RAWWWWWWRRR </p>
                            </li>
                            <li class="event" data-date="2005">
                                <h3>Creative Component Launched</h3>
                                <p>"We can be all things to all people!" </p>
                            </li>
                            <li class="event" data-date="November 15, 2018">
                                <h3>Squareflair Today</h3>

                                <p>"We design and build from scratch!" </p> <p>When we say <em><strong>100% custom</strong></em> we mean it— and we build all sites on the Squarespace Developer platform.</p>
                                <p>Did you know that all of our pixels are hand-forged from the rarest of subpixels grown and harvested in the <em>Nerd Forest</em>? <br /></p>

                                <p><strong>Our success can be measured by lives and brands enhanced by 9+ years of 100% Squarespace-focused service!</strong></p>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>


        );
    }
}

export default RoadMap;
