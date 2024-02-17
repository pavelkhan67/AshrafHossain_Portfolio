import React from 'react';
import img1 from '../assets/img/user1.jpg'
import { TypeAnimation } from 'react-type-animation';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className='pt-7 md:pt-10 ' id='about'>
            <div className='content bg-gradient-to-r from-[#fafafaad] to-[#fafafaad]'>
                <div className='md:grid grid-cols-3 px-1 py-5'>
                    {/* On small devices, the image appears first */}
                    <div className='md:hidden flex justify-center'>
                        <img src={img1} alt="" />
                    </div>

                    <div className='col-span-2 pe-2 flex flex-col justify-center text-justify pr-2 md:pr-5'>
                        <TypeAnimation
                            className='text-3xl md:text-4xl font-semibold pt-2 md:pt-0' style={{ color: 'rgba(31, 52, 122, 1)' }}
                            // Same String at the start will only be typed once, initially
                            sequence={[
                                "Who Am I",
                                4000,
                                "Know About Me",
                                4000
                            ]}
                            speed={10} // Custom Speed from 1-99 - Default Speed: 40
                            wrapper="span" // Animation will be rendered as a <span>
                            repeat={Infinity} // Repeat this Animation Sequence infinitely
                            reset={true}
                        />
                        <div className='ps-1 lg:ps-0 text-base'>
                            <Fade left><p className='pt-2 text-blue-400'>Deputy Secretary </p></Fade>
                            <Fade left><p className='pb-2 text-blue-400'> Government of the People's Republic of Bangladesh.</p></Fade>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed ex veritatis harum architecto aliquid praesentium? Quos libero non accusamus, optio sapiente asperiores, pariatur eius aperiam, corrupti explicabo nostrum fuga! </p>

                            <p className='py-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia iste unde vero rem ipsa laboriosam dolores officiis culpa minima!.</p>

                            {/* <p><span className='font-semibold'>Vision:</span> Our vision is to be one of the most admired company in and outside Bangladesh in the Non Bag Sector.</p> */}
                        </div>
                    </div>

                    {/* On large devices, the image appears second */}
                    <div className='hidden md:flex items-center justify-end'>
                        <img className='' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;