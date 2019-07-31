import React from 'react';
import '../css/joinUs.css';

class JoinUs extends React.Component {

    render() {
        return (
            <div className="join-us container">
                <h2>Join Us!</h2>
                <div className="row join-us-row">
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">NAME</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">EMAIL</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">NAME</span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>
                    </div>
                </div>
                <div><button type="button" className="btn btn-secondary">Submit</button></div>


            </div>


        );
    }
}

export default JoinUs;
