import React from 'react';
import AboutMe from "./component/about-me"
import { aboutMe } from '../data/page-data';

const page = () => {
    return <div> 
        <AboutMe data = {aboutMe}/>
    </div>;
    
};

export default page