import React from 'react';
import banner from '../../resources/images/home-1.svg';
import { scrollToElement } from '../../ui/misc';
import './index.css';
function Banner() {
    return (
        <div className="top_wrapper">
            <div className="left">
                <div className="inner_left">
                    <h1>Ship It</h1>
                    <p className="para">At Ship It, we insure that our customers get fastest of the fastest delivery service possible.
                    Our services comprise of all type of shipping service. We are also exploring and innovating new ways and technology to add to our service list so we can offer best of the best to our customers.
                        </p>
                </div>
                <div className="action-button"><button className="action-btn-grad " onClick={() =>scrollToElement('services')}>Want to book a Service?</button></div>
            </div>
            <div className="right">
                <div className="inner_right">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
}

export default Banner;