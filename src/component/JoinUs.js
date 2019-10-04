import React from 'react';
import '../css/joinUs.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactUs from './ContactUs';

class JoinUs extends React.Component {

    render() {
        return (
            <div className="join-us">
                <a name="JoinUs"></a>
                <h2 className="join-us-title">We need you. Join Us Now!</h2>
                <form action="https://hksbu-googlesheet.herokuapp.com/sendData" target="_blank">
                    <div className="row join-us-row">
                        <div className="col-12 col-md-4 join-us-input-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">
                                        <FontAwesomeIcon className="join-us-icon" icon={faUser} />NAME</span>
                                </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="name" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 join-us-input-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon className="join-us-icon" icon={faEnvelope} />EMAIL</span>
                                </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="email" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 join-us-input-group">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3"><FontAwesomeIcon className="join-us-icon" icon={faCommentDots} />MESSAGE</span>
                                </div>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" name="message" defaultValue="I want to join you!" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                </form>
                <ContactUs />

            </div>


        );
    }
}

export default JoinUs;
