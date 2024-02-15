import React from 'react';
import Domestic from './Training/Domestic';
import International from './Training/International';
import img from "../assets/Training.json";
import Lottie from 'lottie-react';

const Training = () => {
    return (
        <div className='all-container pt-10 ' id='training'>
            <Lottie animationData={img} loop={true} className="lottie-background" />            
            <div className='content bg-gradient-to-r from-[#fafafaad] to-[#fafafaad] px-1 py-5'>
            <h2 className='text-3xl md:text-4xl font-semibold py-5 md:pt-0' style={{ color: 'rgba(31, 52, 122, 1)' }}>Training</h2>
                <div className=' md:grid grid-cols-2 text-start'>
                    <div className='flex items-center'>
                        <Domestic></Domestic>
                    </div>
                    <div className='flex items-center'>
                        <International></International>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;
