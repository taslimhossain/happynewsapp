import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const [sidebar, setSidebar] = useState(false);
    const toggleDrawer = () => {
        sidebar === true ? setSidebar(false) : setSidebar(true);
    };

    return (
        <>
            <header className="bg-white py-2 shadow">
                <div className="container flex justify-center text-center"> 
                    <div className="logo text-3xl text-white"> <Link to ="/"><img src="https://mobile.somoyersonglap.ae/somoyersonglap-logo.png" alt="Somoyersonglap" className="m-auto w-48" /> </Link> </div>
                    {/* <button type="button" className="bg-white rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick= {() => toggleDrawer(true)} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button> */}

                </div>
            </header>
            {
                sidebar === true ?
                <div className="sidebar bg-primary fixed flex flex-col h-screen p-5 sidebar top-0 w-48 z-50 text-white">
                    <Link to="/">Home page</Link>
                    <Link to="/">News page</Link>
                    <Link to="/">About page</Link>
                    <Link to="/">Contact page</Link>
                    <Link to="/">Ads</Link>
                </div>
            : ''
            }
        </>
    )
}

export default Header
