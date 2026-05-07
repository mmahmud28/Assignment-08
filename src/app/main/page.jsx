import React from 'react';
import Banner from '../components/home/Banner';
import Marquee from '../components/home/Marquee';
import FeaturedTiles from '../components/home/FeaturedTiles';
import Footer from '../components/shared/Footer';


const Mainpage = () => {
    return (
        <div>
           <Banner/>
           <Marquee/>
           <FeaturedTiles/>
           <Footer/>
        </div>
    );
};

export default Mainpage;