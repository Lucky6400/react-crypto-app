import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from '../Components/Loader'
import TopTen from '../Components/TopTen'
import millify from 'millify'
import TopNews from '../Components/TopNews'

const Home = () => {

  const { data, isFetching } = useGetCryptosQuery();

  const stats = data?.data?.stats;

  return (
    <div className="container">
        <Sidebar/>
        <Navbar/>
        <div className="ml-5">
            <h1 className="text-2xl mt-20 font-bold">Global Crypto Statistics</h1>
            <div className="mt-5 gap-2 flex flex-wrap ">
              {isFetching ? <Loader/>
            :<>
              <div className="w-1/4 xs:w-full">
                <h6 className="text-sm text-slate-600">Total CryptoCurrencies</h6>
                <p className="text-3xl">{millify(stats.total)}</p>
              </div>
              <div className="w-1/4 xs:w-full">
                <h6 className="text-sm text-slate-600">Total Market Cap</h6>
                <p className="text-3xl">{millify(stats.totalMarketCap)}</p>
              </div>
              <div className="w-1/4 xs:w-full">
                <h6 className="text-sm text-slate-600">Total Markets</h6>
                <p className="text-3xl">{millify(stats.totalMarkets)}</p>
              </div>
              <div className="w-1/4 xs:w-full">
                <h6 className="text-sm text-slate-600">Total Exchanges</h6>
                <p className="text-3xl">{stats.totalExchanges}</p>
              </div>
              <div className="w-1/4 xs:w-full">
                <h6 className="text-sm text-slate-600">Total 24 hour volume</h6>
                <p className="text-3xl">{millify(stats.total24hVolume)}</p>
              </div>
              </>
            }
              
            </div>
            <h1 className="text-2xl mt-20 font-bold">Top 10 Ranked Cryptocurrencies</h1>
            <TopTen count={10}/>
            <h1 className="text-2xl mt-20 font-bold">Top Crypto News</h1>
            <TopNews count={4} />
        </div>
        
    </div>
  )
}

export default Home