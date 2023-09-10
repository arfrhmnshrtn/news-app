import { useEffect } from "react";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Boomark() {
    const selectedNewsData = JSON.parse(localStorage.getItem('selectedNews'));
    const [checkSelectedDataNews, setcheckSelectedDataNews] = useState(false);

    const [showDetail, setShowDetail] = useState(false); //menampilkan detail berita yg dipilih
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        if (selectedNewsData.length === 0) {
            setcheckSelectedDataNews(true);
        }
    }, [selectedNewsData])


    return (
        <>

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
                                        existingData.splice(indexToRemove, 1);
                                        localStorage.setItem('selectedNews', JSON.stringify(existingData));
                                        setcheckSelectedDataNews(false);
                                    }
                                }}
                            >
                                <span className='me-2'><BookmarkRemoveOutlinedIcon /></span>
                                <span>Unbookmark</span>
                            </p>
                        </div>
                    </dialog>
                </div>
            }
            {/* tutup detail berita */}

            <div>
                <h1 className="text-center mt-5 text-2xl font-bold italic"><BookmarkIcon/>Bookmark</h1>
                {checkSelectedDataNews ?
                    <div className="container h-screen flex items-center justify-center font-bold">
                        <h1 className="text-center text-sm -mt-20 italic">Bookmark Kosong Bangg!</h1>
                    </div>
                    :

                    selectedNewsData.map((news, index) => (
                        <div
                            className='flex items-center gap-4 p-2 my-5'
                            key={index + 1}
                            onClick={() => {
                                setSelectedNews(news); //menambahkan element yg diclick untuk detail
                                setShowDetail(true); //menampilkan detail
                            }}
                        >
                            <div className='w-9/12'>
                                <h1 className='text-xs text-blue-700 font-bold'>{news.source.name}</h1>
                                <p className='text-sm font-bold'>{news.title}</p>
                            </div>
                            <div className='bg-slate-300 object-cover rounded-md' style={{ width: '200px', height: '100px' }}>
                                <img src={news.urlToImage} alt={news.title} className='object-cover w-full h-full rounded-md' />
                            </div>


                        </div>


                    ))}
            </div>
        </>
    )
}