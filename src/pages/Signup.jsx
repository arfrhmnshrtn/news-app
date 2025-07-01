import { Link } from "react-router-dom"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState } from "react";

export default function Signup() {

    const [hintPassword, setHintPassword] = useState(true);

    return (
        <div className='container mx-auto h-screen flex items-center justify-center flex-col'>
            <div className='flex flex-col justify-center w-full px-4'>
                <h1 className='text-2xl font-bold text-center mb-5 text-blue-700'>SIGN UP</h1>
                <form action="" className='flex flex-col'>
                    <input type="text" placeholder='Name' required className='px-3 py-2 border border-blue-700 outline-blue-700  rounded-full mb-5' />
                    <input type="email" placeholder='Email' required className='px-3 py-2 border border-blue-700 outline-blue-700  rounded-full' />

                    <div className="w-full relative mt-5 ">
                        {hintPassword ? 
                            <input type="password" placeholder='Password' required className='px-3 py-2 border border-blue-700 outline-blue-700 rounded-full w-full' />

                            :

                            <input type="text" placeholder='Password' required className='px-3 py-2 border border-blue-700 outline-blue-700 rounded-full w-full' />
                            
                        }
                        <div className="absolute end-5 text-blue-700 flex items-center top-0 bottom-0" onClick={() => setHintPassword(!hintPassword)}>
                            <VisibilityOutlinedIcon />
                        </div>
                    </div>

                    <button className='bg-blue-700 mt-5 px-3 py-2 text-white font-bold rounded-full'>Sign Up</button>
                </form>
            </div>
            <div className='mt-10'>
                <Link to={'/profile'}>Login</Link>
            </div>
        </div>
    )
}