import React from 'react';
import { StyleRoot } from 'radium'
import '../css/roadMap.css';
import roadmapItem from '../content/RoadMap.json';
import Timeline from './helper/timeline'


class RoadMap extends React.Component {
    render() {
        // const timelineObj = JSON.parse(roadmapItem);

        return (
            <StyleRoot>
                <Timeline activeColor='yellow'>
                    <div icon='S'><h1>Entry 1</h1></div>
                    <div>
                        <h1>Entry 2</h1>
                        <ul>
                            <li>arbitrary content in entries</li>
                        </ul>
                    </div>
                    {[0, 1, 2, 3, 4].map(i =>
                        <div key={i}>
                            <h1>{i}</h1>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet.
                    </div>
                    )}
                </Timeline>
            </StyleRoot>

        );
    }
}

export default RoadMap;
