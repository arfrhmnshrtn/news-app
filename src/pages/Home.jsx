import { useEffect, useState, createContext, useContext, } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Home() {
    const [news, setNews] = useState([]); //isi berita terkini
    const [currentNewsIndex, setCurrentNewsIndex] = useState(50); // Track the current news index
    const [loading, setLoading] = useState(false); //loadingg
    const [showDetail, setShowDetail] = useState(false); //menampilkan detail berita yg dipilih
    const [selectedNews, setSelectedNews] = useState(null); //isi detail berita yg dipilih
    const [showAllNews, setShowAllNews] = useState(10);
    const [allNews, setAllNews] = useState(true);
    const [titleBookmark, setTitleBookmark] = useState('Bookmark');
    const [iconBookmark, setIconBookmark] = useState(<BookmarkAddOutlinedIcon />)




    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=fca63b749f3645eba38309c8b8569349');
                const data = await response.json();
                setNews(data.articles);
                setLoading(true)
                if (!localStorage.getItem('selectedNews')) {
                    // Jika belum ada data, buat array kosong dan simpan ke Local Storage
                    localStorage.setItem('selectedNews', JSON.stringify([]));
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);


    return (
        <>
            {/* <DataContext.Provider value={{ selectedNews, setSelectedNews }}> */}
            {loading ?

                <div className='m-3'>
                    {/* bagian banner utama */}
                    <div className=''>
                        {news.length > 0 && (
                            <div
                                className="hero h-52 relative"
                                onClick={() => {
                                    setSelectedNews(news[currentNewsIndex]); //menambahkan element yg diclick untuk detail
                                    setShowDetail(true);
                                }}
                            >
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
                    {/* tutup banner utama */}

                    <div className='mt-10'>
                        <div className='flex justify-between'>
                            <h1 className='font-bold text-2xl'>🔥Hot Topic</h1>
                            <button
                                className='text-sm text-blue-700'
                                onClick={() => {
                                    setShowAllNews(showAllNews === 10 ? news.length : 10);
                                    setAllNews(!allNews);
                                }}
                            >
                                {allNews ? 'Show All' : 'Hide Some'}
                            </button>
                        </div>
                        <div>

                            {/* detail berita */}
                            {showDetail &&
                                <div className='container'>

                                    <div className='z-50 h-screen px-2 py-4 bg-white absolute top-0 start-0 end-0 bottom-auto'>
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
                                            <p
                                                className="font-bold"
                                                onClick={() => {
                                                    const existingData = JSON.parse(localStorage.getItem('selectedNews')) || [];
                                                    const indexToRemove = existingData.findIndex(news => news.title === selectedNews.title);

                                                    if (indexToRemove !== -1) {
                                                        // Hapus item jika sudah ada
                                                        existingData.splice(indexToRemove, 1);
                                                        setTitleBookmark('Bookmark');
                                                        setIconBookmark(<BookmarkAddOutlinedIcon/>)

                                                    } else {
                                                        // Tambahkan item jika belum ada
                                                        existingData.push(selectedNews);
                                                        setTitleBookmark('Unbookmark')
                                                        setIconBookmark(<BookmarkIcon/>)
                                                    }

                                                    localStorage.setItem('selectedNews', JSON.stringify(existingData));
                                                }}
                                            >
                                                <span className='me-2'>{iconBookmark}</span>
                                                <span>{titleBookmark}</span>
                                            </p>
                                        </div>
                                    </dialog>
                                </div>
                            }
                            {/* tutup detail berita */}


                            {/* render berita terkini */}
                            {!showDetail && (
                                news.slice(0, showAllNews).map((e, index) => (
                                    <div
                                        className='flex items-center gap-4 p-2 my-5'
                                        key={index + 1}
                                        onClick={() => {
                                            setSelectedNews(e); //menambahkan element yg diclick untuk detail
                                            setShowDetail(true); //menampilkan detail
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
                            {/* tutup render berita terkini */}
                        </div>
                    </div>


                </div>

                :

                // loading
                <div className='h-screen flex items-center justify-center'>
                    <span className="loading loading-bars loading-lg -mt-24"></span>
                </div>
            }
            {/* </DataContext.Provider> */}
        </>
    );
}
