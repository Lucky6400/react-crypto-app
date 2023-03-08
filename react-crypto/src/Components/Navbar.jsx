import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar fixed z-0'>
        <Link to="/" className=" text-cyan-900">
            <h1 className=' font-medium text-3xl xs:text-sm'>React Crypto App</h1>
        </Link>
        <ul className="list-none flex xs:text-xs justify-around w-1/6 xs:w-1/2">
            <li>Contact</li>
            <li>About the author</li>
        </ul>
    </nav>
  )
}

export default Navbar