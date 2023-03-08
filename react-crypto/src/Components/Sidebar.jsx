import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const [width, setWidth] = useState('55px');

    const handleSidebar = () => {
        if (width === '55px') {
            setWidth('max-content');
        } else {
            setWidth('55px');
        }
    }
    return (
        <div style={{ width: width }} className="overflow-hidden z-10 fixed left-0 h-screen top-0 bg-gray-900 text-white">
            <div className="w-full flex justify-between">

                <h2 onClick={handleSidebar} className="text-3xl p-3 cursor-pointer">
                    &#9776;
                </h2>
            </div>

            <ul className="list-none">

                <Link to="/">
                    <li className="sidebar_item">
                        <i className="fa-solid fa-house"></i>Home
                    </li>
                </Link>
                <Link to="/cryptocurrencies">
                    <li className="sidebar_item">
                        <i className="fa-brands fa-bitcoin"></i>Cryptocurrencies
                    </li>
                </Link>
                <Link to="/news">
                    <li className="sidebar_item">
                        <i className="fa-solid fa-newspaper"></i>News
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar