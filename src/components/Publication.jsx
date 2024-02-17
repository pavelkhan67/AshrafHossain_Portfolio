import Lottie from 'lottie-react';
import React from 'react';
import img from "../assets/Publication.json"

const Publication = () => {
    return (
        <div className='pt-7 md:pt-10 px-1 md:px-0' id='publication' >
            <div className='content bg-gradient-to-r from-[#fafafaad] to-[#fafafaad] px-1 py-5'>
                <div className='md:grid grid-cols-3'>
                    <div className="w-full" style={{ height: '300px', width: '100%' }}>
                        <Lottie animationData={img} loop={true} style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className='col-span-2 pl-2 lg:pl-5 pr-2 lg:pr-10 text-justify flex flex-col'>
                        <h2 className='text-3xl md:text-4xl font-semibold py-2 lg:py-5' style={{ color: 'rgba(31, 52, 122, 1)' }}>Publcation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero velit voluptatem repellat voluptatibus tempora consequuntur odit eum hic labore?</p>

                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero velit voluptatem repellat voluptatibus tempora consequuntur odit eum hic labore?</p>

                        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint libero velit voluptatem repellat voluptatibus tempora consequuntur odit eum hic labore?</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Publication;