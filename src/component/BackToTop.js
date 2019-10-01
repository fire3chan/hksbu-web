import React from 'react';
import '../css/BackToTop.css';


class BackToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mybutton: null
        };
    };
    componentDidMount() {
        window.onscroll = this.scrollFunction.bind(this);
        this.state.mybutton = document.getElementById("back-button");
    }


    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.state.mybutton.style.display = "block";
        } else {
            this.state.mybutton.style.display = "none";
        }
    }

    topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    render() {
        return (
            <button onClick={this.topFunction} id="back-button" title="Go to top">Top</button>


        );
    }
}

export default BackToTop;
