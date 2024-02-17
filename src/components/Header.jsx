import React, { useEffect, useState } from 'react';
import img from "../assets/img/logo2.png"

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarPadding = scrollPosition > 100 ? 'py-0.5' : 'py-1';
    const background = scrollPosition > 180 ? 'bg-color2' : 'bg-color text-white';
    const bg = scrollPosition > 100 ? 'bg-color2' : 'bg-color';

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
            const targetPosition = section.offsetTop;
            const duration = 1000;

            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;

            let start = null;

            const smoothScroll = (timestamp) => {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);

                window.scrollTo(0, startPosition + distance * ease(progress));

                if (elapsed < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            };

            // Check if the section is not the main section
            if (sectionId !== 'main') {
                section.style.marginTop = '25px';
            }

            const ease = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

            requestAnimationFrame(smoothScroll);

            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '17px';
                }
            }, 8000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '9px';
                }
            }, 12000);
            setTimeout(() => {
                if (sectionId !== 'main') {
                    section.style.marginTop = '0px';
                }
            }, 16000);
        }
    };

    const handleClick = (event, section) => {
        event.preventDefault();

        scrollToSection(section);

        const links = document.querySelectorAll('.menu a, .men a');
        links.forEach(link => {
            link.classList.remove('active');
        });

        if (section === 'main') {
            event.target.parentNode.classList.add('active');
        } else {
            event.target.classList.add('active');
        }        
    };

    return (
        <div className={`flex justify-between transition px-1 fixed z-10 w-full max-w-[1200px]  ${navbarPadding} ${background}`} >
            <div className="flex items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="bg-color lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-10 h-8 md:h-10 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </label>
                    <ul className=" dropdown-content -ms-1 mt-2 z-[1] ps-3 py-4 space-y-3 bg-white text-blue-500 text-start w-48 font-semibold">
                        <li><a className="" href='#' onClick={(event) => handleClick(event, 'about')}>About</a></li>
                        <li><a className="" href='#' onClick={(event) => handleClick(event, 'education')}>Education</a></li>
                        <li className="relative group">
                            <a className="flex items-center">Training <span className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg></span>
                            </a>
                            <ul className="hidden absolute top-6 text-left ps-2 -left-3 space-y-3 pt-4 pb-3 bg-white group-hover:block z-20 w-48">
                                <li><a className="" href='#' onClick={(event) => handleClick(event, 'training')}>Domestic</a></li>
                                <li><a className="" href='#' onClick={(event) => handleClick(event, 'training')}>International</a></li>
                            </ul>
                        </li>
                        <li><a className="" href='#' onClick={(event) => handleClick(event, 'experience')}>Working Experience</a></li>
                        <li><a className="" href='#' onClick={(event) => handleClick(event, 'publication')}>Publication</a></li>
                        <li><a className="" href='#' onClick={(event) => handleClick(event, 'expertise')}>Expertise</a></li>
                        <li><a className="" href='#' onClick={(event) => handleClick(event, 'research')}>Research Interest</a></li>
                    </ul>
                </div>
                <div className='hidden lg:flex'>
                    <a href="#"><img className='w-52 rounded-md h-12' src={img} alt="" /></a>
                </div>
            </div>

            <div className="flex flex-2 items-center">
                <div className='flex lg:hidden'>
                    <img className='w-44 rounded-md h-11' src={img} alt="" />
                </div>
                <ul className="men hidden lg:flex font-semibold gap-4" >
                    <li><a className="" href='#' onClick={(event) => handleClick(event, 'about')}>About</a></li>
                    <li><a className="" href='#' onClick={(event) => handleClick(event, 'education')}>Education</a></li>
                    <li className="relative group">
                        <a className="flex items-center">Training <span className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg></span>
                        </a>
                        <ul className={`hidden absolute top-6 text-left ps-2 -left-3 space-y-3 pt-6 pb-3 group-hover:block z-20 w-40 ${bg}`}>
                            <li><a className="" href='#' onClick={(event) => handleClick(event, 'training')}>Domestic</a></li>
                            <li><a className="" href='#' onClick={(event) => handleClick(event, 'training')}>International</a></li>
                        </ul>

                    </li>
                    <li><a className="" href='#' onClick={(event) => handleClick(event, 'experience')}>Working Experience</a></li>
                    <li><a className="" href='#' onClick={(event) => handleClick(event, 'publication')}>Publication</a></li>
                    <li><a className="" href='#' onClick={(event) => handleClick(event, 'expertise')}>Expertise</a></li>
                    <li><a className="" href='#' onClick={(event) => handleClick(event, 'research')}>Research Interest</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
