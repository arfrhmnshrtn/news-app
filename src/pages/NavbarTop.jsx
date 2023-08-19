import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";


export default function NavbarTop() {


    const [activeLink, setActiveLink] = useState('All'); // Initialize with 'All' or the default category

    const handleLinkClick = (category) => {
        setActiveLink(category);
    };

    return (
        <>
            <div>
                <div className="flex justify-between  px-3 py-4 mt-3 relative border-y-2">
                    <div>
                        <button><MenuOutlinedIcon /></button>
                    </div>
                    <div className='bg-red-600 absolute top-20 hidden'>
                        <ul className='flex'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                            <li><a href="">Home</a></li>
                        </ul>
                    </div>
                    <div>
                        <a href="" className='font-bold italic text-xl
                        '>Nge<span className='text-blue-500'>News</span></a>
                    </div>
                    <div>
                        <NotificationsNoneOutlinedIcon />
                    </div>
                </div>
            </div>

            {/* navbar items bottom */}
            <div className='mt-5 px-5'>
                <ul className='flex gap-8 overflow-x-scroll flex-nowrap items-start text-sm'>
                    <li>
                        <Link
                            to='/'
                            className={activeLink === 'All' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('All')}
                        >
                            All
                        </Link>
                    </li>
                    <li className=''>
                        <Link
                            to={'headlines'}
                            className={activeLink === 'Headlines' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Headlines')}
                        >
                            Headlines
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'businnes'}
                            className={activeLink === 'Businnes' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Businnes')}
                        >
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'entertaiment'}
                            className={activeLink === 'Entertaiment' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Entertaiment')}
                        >
                            Entertaiment
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={'general'}
                            className={activeLink === 'General' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('General')}
                        >
                            General
                        </Link>
                    </li>


                    <li>
                        <Link
                            to={'healt'}

                            className={activeLink === 'Healt' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Healt')}
                        >
                            Healt
                        </Link>
                    </li>


                    <li>
                        <Link
                            to={'sciance'}

                            className={activeLink === 'Sciance' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Sciance')}
                        >
                            Sciance
                        </Link>
                    </li>


                    <li>
                        <Link
                            to={'sport'}
                            className={activeLink === 'Sport' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Sport')}
                        >
                            Sport
                        </Link>
                    </li>


                    <li>
                        <Link
                            to={'technology'}

                            className={activeLink === 'Technology' ? 'text-blue-700 underline underline-offset-8 font-bold' : ''}
                            onClick={() => handleLinkClick('Technology')}
                        >
                            Technology
                        </Link>
                    </li>
                </ul>
            </div>


        </>
    )
}