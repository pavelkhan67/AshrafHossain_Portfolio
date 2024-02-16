import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/Education.jpg'
import img2 from '../assets/img/Community.jpg'
import img3 from '../assets/img/Economy.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion } from "framer-motion";

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const scrollToProductSection = () => {
        const productSection = document.getElementById('product');
        if (productSection) {
            const targetPosition = productSection.offsetTop; // Get the position of the target element
            const startPosition = window.pageYOffset; // Get the current position
            const distance = targetPosition - startPosition;
            const duration = 1000; // Duration of the scroll animation in milliseconds
            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);

                window.scrollTo(0, startPosition + distance * ease(percentage));

                if (progress < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            const ease = (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function, can be adjusted for different effects

            requestAnimationFrame(smoothScroll);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
        >
            <div id='main'>
                <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} interval={6000} showThumbs={false} showStatus={false} transitionTime={1500} className='text-center ' >
                    <div className="relative w-full h-[65vh] md:h-[50vh] lg:h-[90vh]">
                        <img src={img1} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#0b0b0baf] to-[#2c2c2c8c]">
                            <div className='text-white text-center w-full px-5 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>Some Quote From Him</h2>
                                <p className='text-3xl md:text-4xl lg:text-5xl pt-3 playfair font-semibold '>The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[65vh] md:h-[50vh] lg:h-[90vh]">
                        <img src={img2} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#0b0b0baf] to-[#2c2c2c8c]">
                            <div className='text-white text-center w-full px-5 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>Community Engagement</h2>
                                <p className='text-3xl md:text-4xl lg:text-5xl pt-3 playfair font-semibold'>Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[65vh] md:h-[50vh] lg:h-[90vh]">
                        <img src={img3} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#0b0b0baf] to-[#2c2c2c8c]">
                            <div className='text-white text-center w-full px-5 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>Economic Empowerment</h2>
                                <p className='text-3xl md:text-4xl lg:text-5xl pt-3 playfair font-semibold '>Cultivating economic empowerment unleashes the potential for prosperity, fostering independence, dignity, and resilience within communities.</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </motion.div>
    );
};

export default Banner;