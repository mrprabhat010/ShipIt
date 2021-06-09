import React from 'react';
import Banner from './banner';
import Process from './process';
import Services from './services';
import { Element } from 'react-scroll';

const Home = () => {
    return (
        <div>
            <Element name='home'>
            <Banner/>
            </Element>
            <Process/>
            <Element name='services'>
            <Services/>
            </Element>
        </div>
    );
};

export default Home;