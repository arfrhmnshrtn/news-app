import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

export default function Home() {
    const [news, setNews] = useState([]);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(20); // Track the current news index
    const [loading, setLoading] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);

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
    }, [news]);


    return (
        <>
            {loading ?

                <div className='m-3'>
                    <div className=''>
                        {news.length > 0 && (
                            <div className="hero h-52 relative">
                                <div className="hero-blur absolute top-0 left-0 w-full h-full rounded-lg" style={{ backgroundImage: `url(${news[currentNewsIndex]?.urlToImage})`, filter: 'blur(1px)' }}></div>
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

                            {showDetail &&
                                <div className='container'>

                                    <div className='z-50 px-2 py-4 bg-white absolute top-0 start-0 end-0 bottom-0'>
                                        <div className='mb-5 flex justify-between ' >
                                            <span onClick={() => setShowDetail(false)}>
                                                <ArrowBackIosIcon />
                                            </span>
                                            <span onClick={() => window.my_modal_3.showModal()}>
                                                <MoreVertIcon />
                                            </span>
                                        </div>
                                        <h1 className='font-bold text-2xl mb-5'>{selectedNews.title}</h1>
                                        <img src={selectedNews.urlToImage} alt={selectedNews.title} className='object-cover w-fullrounded-md rounded-lg' />
                                        <p className='mt-5 text-blue-700 italic text-sm'>{selectedNews.publishedAt}</p>
                                        <p className='mt-5'>{selectedNews.description}</p>
                                        <p className='mt-5 text-blue-700 font-bold'>{selectedNews.author}</p>
                                    </div>

                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <p className="font-bold mb-2">
                                                <span className='me-2'><ShareOutlinedIcon /></span>
                                                <span>Share</span>
                                            </p>
                                            <p className="font-bold">
                                                <span className='me-2'><BookmarkAddOutlinedIcon /></span>
                                                <span>Bookmark</span>
                                            </p>
                                        </div>
                                    </dialog>
                                </div>
                            }

                            {!showDetail && (
                                news.slice(20, 30).map((e, index) => (
                                    <div
                                        className='flex items-center gap-4 p-2 my-5'
                                        key={index + 1}
                                        onClick={() => {
                                            setSelectedNews(e);
                                            setShowDetail(true);
                                        }}
                                    >
                                        <div className='w-9/12'>
                                            <h1 className='text-xs text-blue-700 font-bold'>{e.source.name}</h1>
                                            <p className='text-sm font-bold'>{e.title}</p>
                                        </div>
                                        <div className='bg-slate-300 object-cover rounded-md' style={{ width: '200px', height: '100px' }}>
                                            <img src={e.urlToImage} alt={e.title} className='object-cover w-full h-full rounded-md' />
                                        </div>
                                    </div>
                                ))
                            )}





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
