import React from 'react';
import Banner from './Banner';
import About from './About'
import Contact from './Contact';
import Footer from './Footer';
import Education from './Education';

import WorkingExperience from './WorkingExperience';
import Publication from './Publication';
import Expertise from './Expertise';
import ResearchInterest from './ResearchInterest';
import Training from './Training';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Training></Training>
            <WorkingExperience></WorkingExperience>
            <Publication></Publication>
            <Expertise></Expertise>
            <ResearchInterest></ResearchInterest>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;