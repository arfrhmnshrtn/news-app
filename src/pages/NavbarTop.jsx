import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';


export default function NavbarTop() {


    const initialActiveLink = localStorage.getItem('activeLink') || 'All';
    const [activeLink, setActiveLink] = useState(initialActiveLink);

    const handleLinkClick = (category) => {
        setActiveLink(category);
        localStorage.setItem('activeLink', category);
    };

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = () => {
        navigate(`/result?search=${searchValue}`);
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit();
        }
    };

    const location = useLocation(); // Perlu mengimpor useLocation dari react-router-dom

    const [hour, setHour] = useState('');

    useEffect(() => {
        const date = new Date();
        const currentHour = date.getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setHour('Pagi');
        } else if (currentHour >= 12 && currentHour < 17) {
            setHour('Siang');
        } else if (currentHour >= 17 && currentHour < 20) {
            setHour('Sore');
        } else {
            setHour('Malam');
        }
    }, []);

    if (location.pathname === '/profile' || location.pathname === '/headlines' || location.pathname === '/signup') {
        return null;
    }



    return (
        <>
            <div>
                <div className="flex justify-between  px-3 py-4 mt-3 relative">
                    <div>
                        <a href="" className='font-bold italic text-xl
                        '>{hour}, Arief👋</a>
                    </div>
                    <div>
                        <NotificationsNoneOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className='w-full mb-5 px-2 relative'>
                <input
                    type="text"
                    placeholder="Find interesting news"
                    className="input border-slate-200 rounded-full w-full focus:border-blue-700 focus:outline-none"
                    value={searchValue}
                    onChange={handleSearchChange}
                    onKeyPress={handleSearchKeyPress}
                />
                <button className=' absolute end-8 top-0 bottom-0 flex items-center' onClick={handleSearchSubmit}>
                    <SearchIcon />
                </button>
            </div>

            {/* navbar items bottom */}
            <div className=' px-2'>
                <ul className='flex gap-4 overflow-x-scroll flex-nowrap items-start text-sm'>
                    <li className={activeLink === 'All' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('All')}>
                        <Link
                            to='/'
                            className=''

                        >
                            For<span className='ms-1'>You</span>
                        </Link>
                    </li>
                    <li className={activeLink === 'business' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('business')}>
                        <Link
                            to={'business'}
                        >
                            Business
                        </Link>
                    </li>
                    <li className={activeLink === 'entertaiment' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('entertaiment')}>
                        <Link
                            to={'entertainment'}
                        >
                            Entertainment
                        </Link>
                    </li>
                    <li className={activeLink === 'general' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('general')}>
                        <Link
                            to={'general'}
                        >
                            General
                        </Link>
                    </li>


                    <li className={activeLink === 'health' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('health')}>
                        <Link
                            to={'health'}
                        >
                            Health
                        </Link>
                    </li>


                    <li className={activeLink === 'science' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('science')}>
                        <Link
                            to={'science'}
                        >
                            Science
                        </Link>
                    </li>


                    <li className={activeLink === 'sports' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('sports')}>
                        <Link
                            to={'sports'}
                        >
                            Sports
                        </Link>
                    </li>


                    <li className={activeLink === 'technology' ? 'bg-blue-700 text-white font-bold px-5 py-1 rounded-full ' : 'bg-slate-200 px-5 py-1 rounded-full w-full'} onClick={() => handleLinkClick('technology')}>
                        <Link
                            to={'technology'}
                        >
                            Technology
                        </Link>
                    </li>
                </ul>

            </div>


        </>
    )
}