import React, { useState } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import millify from 'millify'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const TopTen = ({count}) => {
    const { data, isFetching } = useGetCryptosQuery();

    const [coins, setCoins] = useState(data?.data?.coins);

    const [search, setSearch] = useState("");

    let length;
    if(count === 10){
        length = 10;
    } else if (count === "all"){
        length = coins?.length;
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const filteredCoins = data?.data?.coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
        <Sidebar/>
        <Navbar/>
        {count === "all" && 
        <>
        <input type="text" value={search} onChange={handleChange} placeholder="Search cryptocurrencies" name="" id="" className=" w-1/3 xs:w-10/12 text-white focus:outline-none mt-5 rounded-md bg-sky-900 p-3" />
        </>
        }
        <div className="mt-10 flex flex-wrap justify-start gap-10">
            {isFetching ? <Loader /> :
                <>
                    {filteredCoins?.slice(0, length).map((coins, i) => (
                        <div key={i} className="coin-card w-1/4 xs:w-full">
                            <img src={coins.iconUrl} alt="" />

                            <div className="w-full flex">
                                <div className="w-1/2">
                                     <a href={coins.coinrankingUrl}>
                                <h2 className="font-bold text-sky-800">{coins.name} ({coins.symbol})</h2>
                            </a>
                            <h2>Price: ${millify(coins.price)}</h2>
                            <h2>Rank: {coins.rank}</h2>

                                </div>
                                <div className="w-1/2">
                                    <h2>BTC Price: {millify(coins.btcPrice)}</h2>
                                    <h2>Listed at: {millify(coins.listedAt)}</h2>
                                    <h2>Change: {coins.change}</h2>
                                </div>
                            </div>
                           
                        </div>
                    ))}
                    {count === 10 && 
                    <div className="coin-card w-1/4 xs:w-full flex justify-center align-middle text-center">
                        <Link to="/cryptocurrencies">
                        <h2 className="text-4xl text-sky-900">+ more</h2> 
                        </Link>
                         
                    </div>
                    }
                    
                </>
            }

        </div>
        </>
    )
}

export default TopTen