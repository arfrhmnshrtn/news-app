import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function Busines() {

    const { id } = useParams();
    const countries = [
        { label: 'AE' },
        { label: 'AR' },
        { label: 'AT' },
        { label: 'AU' },
        { label: 'BE' },
        { label: 'BG' },
        { label: 'BR' },
        { label: 'CA' },
        { label: 'ch' },
        { label: 'cn' },
        { label: 'co' },
        { label: 'cu' },
        { label: 'cz' },
        { label: 'de' },
        { label: 'eg' },
        { label: 'fr' },
        { label: 'gb' },
        { label: 'gr' },
        { label: 'hk' },
        { label: 'ID' },
        { label: 'ie' },
        { label: 'il' },
        { label: 'in' },
        { label: 'it' },
        { label: 'jp' },
        { label: 'kr' },
        { label: 'lt' },
        { label: 'lv' },
        { label: 'ma' },
        { label: 'mx' },
        { label: 'my' },
        { label: 'ng' },
        { label: 'nl' },
        { label: 'no' },
        { label: 'nz' },
        { label: 'ph' },
        { label: 'pl' },
        { label: 'pt' },
        { label: 'ro' },
        { label: 'rs' },
        { label: 'ru' },
        { label: 'sa' },
        { label: 'se' },
        { label: 'sg' },
        { label: 'si' },
        { label: 'sk' },
        { label: 'th' },
        { label: 'tr' },
        { label: 'tw' },
        { label: 'ua' },
        { label: 'us' },
        { label: 've' },
        { label: 'za' },
    ];

    const [showDetail, setShowDetail] = useState(false); //menampilkan detail berita yg dipilih
    const [selectedNews, setSelectedNews] = useState(null); //isi detail berita yg dipilih
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countrySelect, setCountrySelect] = useState('US');
    const [titleBookmark, setTitleBookmark] = useState('Bookmark');
    const [iconBookmark, setIconBookmark] = useState(<BookmarkAddOutlinedIcon />)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countrySelect}&category=${id}&apiKey=fca63b749f3645eba38309c8b8569349`);
                const data = await response.json();
                setNews(data.articles);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [news]);

    return (
        <>
            {loading ?


                <div className='h-screen flex items-center justify-center'>
                    <span className="loading loading-bars loading-lg -mt-24"></span>
                </div>

                :

                <div className='m-3 mx-auto container'>

                    <details className="dropdown w-full">
                        <summary className="m-1 btn bg-slate-100">
                            Select Country
                            <img className="w-8 h-6" src={`https://flagsapi.com/${countrySelect.toUpperCase()}/flat/64.png`} />
                        </summary>

                        <ul className="flex flex-row justify-between menu dropdown-content z-[1] bg-white w-full">
                            {countries.map(country => (
                                <li className=" w-14" key={country.label} onClick={() => setCountrySelect(country.label.toUpperCase())}>
                                    <img className="" src={`https://flagsapi.com/${country.label.toUpperCase()}/flat/64.png`} />
                                </li>
                            ))}
                        </ul>
                    </details>

                    <div className=''>
                        <div>

                            {/* detail berita */}
                            {showDetail &&
                                <div className='container'>

                                    <div className='z-50 h-full px-2 py-4 bg-white absolute top-0 md:start-20 md:end-20 bottom-0'>
                                        <div className='mb-5 flex justify-between ' >
                                            <span className="cursor-pointer" onClick={() => setShowDetail(false)}>
                                                <ArrowBackIosIcon />
                                            </span>
                                            <span className="cursor-pointer" onClick={() => window.my_modal_3.showModal()}>
                                                <MoreVertIcon />
                                            </span>
                                        </div>
                                        <h1 className='font-bold text-2xl mb-5'>{selectedNews.title}</h1>
                                        <img
                                            src={selectedNews.urlToImage}
                                            alt={selectedNews.title}
                                            className='object-cover w-full rounded-lg md:h-52'
                                        />
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
                                            <p className="font-bold mb-2 cursor-pointer hover:text-blue-700">
                                                <span className='me-2'><ShareOutlinedIcon /></span>
                                                <span>Share</span>
                                            </p>
                                            <p
                                                className="font-bold cursor-pointer hover:text-blue-700"
                                                onClick={() => {
                                                    const existingData = JSON.parse(localStorage.getItem('selectedNews')) || [];
                                                    const indexToRemove = existingData.findIndex(news => news.title === selectedNews.title);

                                                    if (indexToRemove !== -1) {
                                                        // Hapus item jika sudah ada
                                                        existingData.splice(indexToRemove, 1);
                                                        setTitleBookmark('Bookmark');
                                                        setIconBookmark(<BookmarkAddOutlinedIcon />)

                                                    } else {
                                                        // Tambahkan item jika belum ada
                                                        existingData.push(selectedNews);
                                                        setTitleBookmark('Unbookmark')
                                                        setIconBookmark(<BookmarkIcon />)
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

                            {!showDetail && (
                                news.map((e, index) => (
                                    <div
                                        className='flex items-center gap-4  p-2 my-5 cursor-pointer hover:bg-slate-100'
                                        key={index + 1}
                                        onClick={() => {
                                            setSelectedNews(e); //menambahkan element yg diclick untuk detail
                                            setShowDetail(true); //menampilkan detail
                                        }}
                                    >
                                        <div className='w-9/12'>
                                            <a href="" className='text-xs text-blue-700 font-bold'>{e.source.name}</a>
                                            <p className='text-sm font-bold'>{e.title}</p>
                                        </div>
                                        <div className='bg-slate-300 object-cover' style={{ width: '200px', height: '100px' }}>
                                            <img src={e.urlToImage} alt={e.title} className='object-cover w-full h-full' />
                                        </div>
                                    </div>
                                )))}

                        </div>
                    </div>
                </div>
            }
        </>
    )
}
