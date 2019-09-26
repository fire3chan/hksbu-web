import React from 'react';
import '../css/joinUs.css';
import constant from '../config/constant';

class JoinUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendData = this.sendData.bind(this);
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    async sendData() {
        const response = await fetch(constant.serverURL + 'sendData?name=' + this.state.name + '&email=' + this.state.email + '&message=' + this.state.message);
    }


    render() {

        return (
            <div className="join-us container">
                <h2>We need you. Join Us Now!</h2>
                <form className="row join-us-row" >
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">NAME</span>
                            </div>
                            <input name="name" type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.name} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">EMAIL</span>
                            </div>
                            <input name="email" type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.email} onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="col-11 col-md-4 join-us-input-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3">MESSAGE</span>
                            </div>
                            <input name="message" type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.message} onChange={this.handleInputChange} />
                        </div>
                    </div>

                </form>
                <button type="button" className="btn btn-secondary" onClick={this.sendData}>Submit</button>


            </div>


        );
    }

}

export default JoinUs;
