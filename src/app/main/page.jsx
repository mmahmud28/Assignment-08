"use client";
import React from 'react';
import Banner from '../components/home/Banner';
import Marquee from '../components/home/Marquee';
import FeaturedTiles from '../components/home/FeaturedTiles';
import Footer from '../components/shared/Footer';
import { authClient } from '@/lib/auth-client';
import { reddit } from 'better-auth';


const Mainpage = () => {

      const userData = authClient.useSession();
      const userdata = userData?.data?.user;

      if(!userdata){
        reddit:('/')
      }

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