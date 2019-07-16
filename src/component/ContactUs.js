import React from 'react';
import '../css/contactUs.css';

class ContactUs extends React.Component {

    render() {
        return (
            <div>
                <h2>Contact Us</h2>
                <label for="basic-url">NAME</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">NAME</span>
                    </div>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <label for="basic-url">EMAIL</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">EMAIL</span>
                    </div>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
                <label for="basic-url">MESSAGE</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">MESSAGE</span>
                    </div>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
                </div>
            </div>


        );
    }
}

export default ContactUs;
