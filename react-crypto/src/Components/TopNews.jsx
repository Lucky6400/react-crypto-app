import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { useGetCryptosQuery } from '../services/cryptoApi';

const TopNews = ({ count }) => {
    const [newsCategory, setNewsCategory] = useState("cryptocurrency");
    const {data: currency} = useGetCryptosQuery();

    const { data, isFetching } = useGetCryptoNewsQuery({ newsCategory: newsCategory })

    if(isFetching) {
      console.log('Fetching')
    } else {
      console.log(data.value)
    }

    const handleChange = (e) => {
        setNewsCategory(e.target.value);
    }
   
    return (
        <>
        {count > 10 && 
        <select
        className="w-1/4 mt-3 xs:w-11/12 p-3 bg-sky-900 text-white focus:outline-none rounded-md"
        value={newsCategory} onChange={handleChange}>
            <option value="">All</option>
            {currency?.data?.coins.map((item, i) => (
                <>
                
                <option key={i} value={item.name}>{item.name}</option></>
            ))}
            
        </select>
        }
        <div className="flex mt-5 flex-wrap w-full justify-start gap-10 xs:gap-0">
            {isFetching ? <Loader /> :

                data.value.slice(0, count).map((item, i) => (
                    <div key={i} className="news_card my-3 w-1/5 xs:w-11/12">
                    <img src={item.image?.thumbnail.contentUrl || "https://tmssl.akamaized.net/images/foto/galerie/diego-costa-atletico-mineiro-2021-1639720442-77052.jpg?lm=1639720471"} alt="" className="w-full object-cover" />
                    <a href={item?.ampUrl || "#"}>
                        <h2 className="text-2xl my-3">{item.name.slice(0, 40) + "..."}</h2>
                    </a>
                    <div className="w-full flex justify-between align-middle h-10">
                        <div className="text-sm flex text-gray-500">
                            <img src={item.provider[0].image?.thumbnail.contentUrl} className="w-4 h-4 rounded-lg mr-3" alt="" /> 
                            {item.provider[0].name}
                        </div>
                    </div>
                    <p className=" text-gray-600">
                        {item.description.slice(0, 130) + "..."}
                    </p>

                    <div className="flex mt-4 text-slate-800 font-semibold justify-end text-end">
                        {moment(item?.datePublished).startOf('ss').fromNow()}
                    </div>
                </div>
                ))
                
            }
            {count <= 10 && <div className="w-1/5 xs:w-11/12 mb-6 text-3xl text-cyan-800">
            <Link to="/news">+ more</Link>    
            </div>}
        </div>
        </>
    )
}

export default TopNews