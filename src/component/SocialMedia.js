import React from 'react';
import '../css/socialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { contactUsItem } from '../content/ContactUs.json';

class SocialMedia extends React.Component {

    render() {
        return (

            <ul className="social-media-link-group list-group list-group-horizontal">
                <li className="list-group-item">
                    <a className="social-media-icon-link" href={contactUsItem.Facebook} target="_blank" data-link-type="Facebook">
                        <FontAwesomeIcon className="social-media-icon" icon={faFacebook} />
                    </a>
                </li>
                <li className="list-group-item">
                    <a className="social-media-icon-link" href={contactUsItem.Instagram} target="_blank" data-link-type="Instagram">
                        <FontAwesomeIcon className="social-media-icon" icon={faInstagram} />
                    </a>
                </li>
                <li className="list-group-item">
                    <a className="social-media-icon-link" href={contactUsItem.Youtube} target="_blank" data-link-type="Youtube">
                        <FontAwesomeIcon className="social-media-icon" icon={faYoutube} />
                    </a>
                </li>
                <li className="list-group-item">
                    <a className="social-media-icon-link" href={"mailto:" + contactUsItem["E-mail"]} target="_blank" data-link-type="Email">
                        <FontAwesomeIcon className="social-media-icon" icon={faEnvelope} />
                    </a>
                </li>

            </ul>
        );
    }
}

export default SocialMedia;
