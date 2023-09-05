import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
    const location = window.location.search;
    const searchValue = new URLSearchParams(location).get('search');
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=fca63b749f3645eba38309c8b8569349`);
                const data = await response.json();
                setNews(data.articles);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [news]);

    return (
        <>
            {
                loading ?
                    <div className='h-screen flex items-center justify-center'>
                        < span className="loading loading-bars loading-lg -mt-24" ></span >
                    </div >

                    :
                    <div>



                        {
                            news.map((item, index) => (
                                <div className='flex items-center gap-4  p-2 my-5' key={index + 1} >
                                    <div className='w-9/12'>
                                        <Link to={item.title} className='text-xs text-blue-700 font-bold'>{item.source.name}</Link>
                                        <p className='text-sm font-bold'>{item.title}</p>
                                    </div>
                                    <div className='bg-slate-300 object-cover rounded-md' style={{ width: '200px', height: '100px' }}>
                                        <img src={item.urlToImage} alt={item.title} className='object-cover w-full h-full rounded-md' />
                                    </div>
                                </div>
                            ))
                        }


                    </div>
            }
        </>
    );
}