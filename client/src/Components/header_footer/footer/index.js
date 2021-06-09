import React, { Component } from 'react';
import './index.css';

//change to function
class Footer extends Component {
    render() {
        return (
            <footer className="main_wrapper">
                <div className="inner_wrapper">
                    <div className="left_wrapper">
                        All rights reserved.
                    </div>
                    <div className="right_wrapper">
                        Demo marked.
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;