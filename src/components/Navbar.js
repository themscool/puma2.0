import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="topbar text-center bg-[#ae946d]">
                <p className='text-white py-3 text-sm'><span className='font-bold'>EXTRA 5% INSTANT DISCOUNT</span> FOR ALL ONLINE PAYMENTS. FREE DELIVERY. FREE RETURNS.</p>
            </div>
            <header className='px-4 lg:px-12 sticky top-0 z-[1] bg-black py-2 lg:py-4'>
                <div className="container-fluid">
                    <div className="navbar flex items-center justify-between">
                        <div className="brand-logo flex items-center">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/994/248/small/puma-logo-white-symbol-clothes-design-icon-abstract-football-illustration-with-black-background-free-vector.jpg" className='w-auto h-12' alt="" />
                            <div className="page-menu hidden lg:block ml-12">
                                <ul className='flex hover:opacity-60'>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">New Arivals</a></li>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">Women</a></li>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">Men</a></li>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">Kids</a></li>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">Collabrations</a></li>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">Sport</a></li>
                                    <li className='mr-5 xl:mx-8'><a className='text-white font-bold' href="http://" target="_blank" rel="noopener noreferrer">Outlet</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="menu-action flex items-center ">
                            <div className="search-box hidden lg:block border border-gray-600 relative py-3 pl-10 w-full mr-6">
                                <input className='bg-transparent outline-none text-white' type="text" name="" id="" placeholder='SEARCH PUMA.COM' />
                                <div className="search-icon absolute left-2 top-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>

                                </div>
                            </div>
                            <div className="mobile-search lg:hidden block mr-4 cursor-pointer hover:opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                            <div className="wishlist cursor-pointer hover:opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                            </div>
                            <div className="cart cursor-pointer hover:opacity-80 mx-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>

                            </div>
                            <div className="profile hidden sm:block cursor-pointer hover:opacity-80">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </div>
                            <div className='block lg:hidden'>
                            <div className="mobile-menu flex items-center cursor-pointer ml-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                                </svg>
                                <p className='text-white hidden sm:block font-medium ml-2'>Menu</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar