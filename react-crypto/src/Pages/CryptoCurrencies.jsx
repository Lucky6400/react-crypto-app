import React from 'react'
import TopTen from '../Components/TopTen'

const CryptoCurrencies = () => {
  return (
    <div className="ml-5">
      <h1 className="text-2xl mt-20 font-bold">Cryptocurrencies</h1>
      <TopTen count={"all"}/>
    </div>
  )
}

export default CryptoCurrencies