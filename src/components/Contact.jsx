import React from 'react';

const Contact = () => {
    return (
        <div className='pt-7 md:pt-10 '>
            <div className='bg-gray-200 text-center' style={{ color: 'rgba(31, 52, 122, 1)' }}>
                <div className='py-10 md:py-14 lg:py-16 space-y-3 text-2xl lg:text-3xl font-bold'>
                    <p>Cell: +88 03453-977825</p>
                    <a href="mailto:@gmail.com" className=''>Email: useremail@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;