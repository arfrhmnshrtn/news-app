import { useEffect, useState } from "react"

export default function Headlines() {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=fca63b749f3645eba38309c8b8569349');
                const data = await response.json();
                setNews(data.articles);
                setLoading(true)
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [])
    return (
        <>
            {loading ?

                <div className='m-3'>

                    <div className='mt-8'>
                        <div>

                            {news.map((e, index) => (
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
    )
}