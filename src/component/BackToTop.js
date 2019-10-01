import React from 'react';
import '../css/BackToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';

class BackToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toTopBtn: null
        };
    };
    componentDidMount() {
        window.onscroll = this.scrollFunction.bind(this);
        this.setState({ toTopBtn: document.getElementById("to-top-btn") });
    }


    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.state.toTopBtn.style.display = "block";
        } else {
            this.state.toTopBtn.style.display = "none";
        }
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <button onClick={this.topFunction} id="to-top-btn" title="Go to top">
                <FontAwesomeIcon className="social-media-icon" icon={faLongArrowAltUp} />
            </button>


        );
    }
}

export default BackToTop;
