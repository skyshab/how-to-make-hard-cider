import React, { useState } from 'react';
import { Link } from 'gatsby';

const Nav = () => {
    const [toggled, setToggled] = useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setToggled(!toggled);
    };

    const toggleClass = toggled ? 'flex' : 'hidden';

    return (
        <nav className='w-full bg-primary'>
            <div className='container py-4 lg:py-0'>
                <div onClick={handleToggle} className='lg:hidden text-white'>
                    <svg
                        viewBox='0 0 100 80'
                        width='24'
                        height='24'
                        className='fill-current'
                    >
                        <rect width='100' height='12'></rect>
                        <rect y='30' width='100' height='12'></rect>
                        <rect y='60' width='100' height='12'></rect>
                    </svg>
                </div>
                <ul
                    className={`flex-col ${toggleClass} lg:display-block lg:flex lg:flex-row lg:justify-between`}
                >
                    <li>
                        <Link
                            to='/'
                            className='mr-4 text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/clean-and-sterile'
                            className='mr-4 text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Clean & Sterile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/selecting-fruit-and-yeast'
                            className='mr-4 text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Fruit & Yeast
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/making-your-cider'
                            className='mr-4 text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Making Your Cider
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/carbonation-and-alcohol'
                            className='mr-4 text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Carbonation
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/racking-and-bottling'
                            className='mr-4 text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Bottle It!
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/links-and-credits'
                            className='text-white text-sm font-bold py-2 inline-block lg:py-4'
                        >
                            Links & Credits
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
