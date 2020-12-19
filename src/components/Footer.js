import React from 'react';

function Footer() {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='container py-4'>
                <p className='text-center mb-0'>
                    © {new Date().getFullYear()}
                    {` `}
                    Jessica Shabatura
                </p>
            </div>
        </footer>
    );
}

export default Footer;
