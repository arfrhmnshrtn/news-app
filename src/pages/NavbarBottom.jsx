import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from 'react';

export default function NavbarBottom() {
    const [active, setActive] = useState('home');

    function buttonActiveHandller(content) {
        setActive(content)
    }
    return (
        <>

            <div className="btm-nav">
                <button className={active == 'home' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('home')}>
                    <HomeOutlinedIcon />
                </button>
                <button className={active == 'search' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('search')}>
                    <SearchIcon />
                </button>
                <button className={active == 'bookmark' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('bookmark')}>
                    <BookmarksOutlinedIcon />
                </button>
                <button className={active == 'user' ? 'text-blue-700' : ''} onClick={() => buttonActiveHandller('user')}>
                    <PersonOutlineOutlinedIcon />
                </button>

            </div>

        </>
    )
}