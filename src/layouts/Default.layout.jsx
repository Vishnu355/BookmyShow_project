import React from 'react';

import Navbar from '../components/navbar.component';
import Herocarousal from '../components/Herocarousal/HeroCarousal.component';

const DefaultLayout = (props) =>{
    return (
     <>
     <Navbar />
     <Herocarousal />
    {props.children}
    </>
    );
};

export default DefaultLayout;
