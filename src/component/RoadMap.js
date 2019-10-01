import React from 'react';
import { StyleRoot } from 'radium'
import '../css/roadMap.css';
import { roadmapItem } from '../content/Roadmap.json';
import Timeline from './helper/timeline'


class RoadMap extends React.Component {
    render() {
        return (
            <div className="road-map">
                <a name="RoadMap"></a>
                <div className="road-map-title">
                    Our Road Map
                </div>
                <StyleRoot>
                    <Timeline activeColor='yellow'>
                        {roadmapItem.map((item, index) =>
                            <div key={index}>
                                <div className="road-map-item-title">{item.title}</div>
                                <p>{item.milestoneDate}</p>
                                <div className="road-map-desc">
                                    {item.description}
                                </div>
                            </div>
                        )}
                    </Timeline>
                </StyleRoot>
            </div>


        );
    }
}

export default RoadMap;
