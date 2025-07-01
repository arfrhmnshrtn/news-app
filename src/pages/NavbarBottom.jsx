import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarBottom() {
    const [active, setActive] = useState('home');

    function buttonActiveHandller(content) {
        setActive(content)
    }

    return (
        <>

            <div className="btm-nav container mx-auto">
                <Link to={'/'} className={active == 'home' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('home')}>
                    <HomeOutlinedIcon />
                </Link>
                <Link to={'/headlines'} className={active == 'search' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('search')}>
                    <LocalFireDepartmentOutlinedIcon />
                </Link>
                <Link to={'/bookmark'} className={active == 'bookmark' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('bookmark')}>
                    <BookmarksOutlinedIcon />
                </Link>
                <Link to={'profile'} className={active == 'user' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('user')}>
                    <PersonOutlineOutlinedIcon />
                </Link>

            </div>

        </>
    )
}