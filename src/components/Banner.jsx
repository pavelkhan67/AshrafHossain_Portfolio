import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/prod2.jpg'
import img2 from '../assets/img/prod1.jpg'
import img3 from '../assets/img/prod3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

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
                    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[85vh]">
                        <img src={img1} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                            <div className='text-white text-center w-full px-4 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>Some Quote From Him</h2>
                                <p className='text-4xl md:text-5xl pt-3 playfair font-semibold'>Rising Together, Empowering Forever: Women's Strength, Society's Progress</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[85vh]">
                        <img src={img2} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                            <div className='text-white text-center w-full px-4 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>Some Quote From Him</h2>
                                <p className='text-4xl md:text-5xl pt-3 playfair font-semibold'>Rising Together, Empowering Forever: Women's Strength, Society's Progress</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[85vh]">
                        <img src={img3} className="w-full h-full" />
                        <div className=" absolute h-full flex items-center gap-4 left-0 top-0 bg-gradient-to-r from-[#111111ec] to-[#4140408c]">
                            <div className='text-white text-center w-full px-4 md:px-8 pt-20'>
                                <h2 className='text-xl underline'>Some Quote From Him</h2>
                                <p className='text-4xl md:text-5xl pt-3 playfair font-semibold'>Rising Together, Empowering Forever: Women's Strength, Society's Progress</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

        </motion.div>
    );
};

export default Banner;