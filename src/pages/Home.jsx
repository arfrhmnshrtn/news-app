import { useEffect, useState } from 'react';

export default function Home() {
    const [news, setNews] = useState([]);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(7); // Track the current news index
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=fca63b749f3645eba38309c8b8569349');
                const data = await response.json();
                setNews(data.articles);
                setLoading(true)
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    // useEffect(() => {
    //     if (news.length > 0) {
    //         const randomIndex = Math.floor(Math.random() * news.length);
    //         setCurrentNewsIndex(randomIndex);
    //     }
    // }, [news]);

    return (
        <>
            {loading ?

                <div className='m-3'>
                    <div className=''>
                        {news.length > 0 && (
                            <div className="hero h-52 relative">
                                <div className="hero-blur absolute top-0 left-0 w-full h-full" style={{ backgroundImage: `url(${news[currentNewsIndex]?.urlToImage})`, filter: 'blur(1px)' }}></div>
                                <div className="hero-content absolute bottom-0 text-white">
                                    <div className="max-w-md text-start">
                                        <h1 className='font-bold text-xl'>{news[currentNewsIndex].title}</h1>
                                        <p className='text-xs mt-2 italic'>{news[currentNewsIndex].publishedAt}</p>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div >

                    <div className='mt-10'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl'>🔥Hot Topic</h1>
                            <a href="" className='text-sm text-blue-700'>View all</a>
                        </div>
                        <div>

                            {news.slice(20, 30).map((e, index) => (
                                <div className='flex items-center gap-4  p-2 my-5' key={index + 1}>
                                    <div className='w-9/12'>
                                        <a href="" className='text-xs text-blue-700 font-bold'>{e.source.name}</a>
                                        <p className='text-sm font-bold'>{e.title}</p>
                                    </div>
                                    <div className='bg-slate-300 object-cover' style={{ width: '200px', height: '100px' }}>
                                        <img src={e.urlToImage} alt={e.title} className='object-cover w-full h-full' />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                :

                <div className='h-screen flex items-center justify-center'>
                    <span className="loading loading-bars loading-lg -mt-24"></span>
                </div>
            }
        </>
    );
}
