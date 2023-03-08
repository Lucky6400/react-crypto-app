import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import TopNews from '../Components/TopNews'

const News = () => {

  return (
    <>
      <Sidebar/>
      <Navbar/>
      <div className=" mt-16 ml-5">
      <h1 className="text-2xl mt-20 font-bold">Global CryptoCurrency News</h1>
        <TopNews count={100}/>
      </div>
    </>
  )
}

export default News