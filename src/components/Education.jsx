import React from 'react';
import Lottie from "lottie-react";
import img from "../assets/Education.json"

const Education = () => {
    return (
        <div className='pt-7 md:pt-10' id='education' >
            <div className='bg-gray-200 py-5'>
                <div className='md:grid grid-cols-3'>
                    <div className="w-full" style={{ height: '300px', width: '100%' }}>
                        <Lottie animationData={img} loop={true} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className='col-span-2 pl-2 lg:pl-5 pr-2 lg:pr-10 text-justify flex flex-col'>
                        <h2 className='text-3xl md:text-4xl font-semibold py-2 lg:py-5' style={{ color: 'rgba(31, 52, 122, 1)' }}>Education</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero velit voluptatem repellat voluptatibus tempora consequuntur odit eum hic labore?</p>

                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero velit voluptatem repellat voluptatibus tempora consequuntur odit eum hic labore?</p>

                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero velit voluptatem repellat voluptatibus tempora consequuntur odit eum hic labore?</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Education;