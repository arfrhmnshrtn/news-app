import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

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

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countrySelect, setCountrySelect] = useState('US');

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

                <div className='m-3'>

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
            }
        </>
    )
}
