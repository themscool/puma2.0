import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="offer-banner text-center bg-red-500 py-2">
                <h3 className='text-white font-bold text-xl'>BLACK FRIDAY SALE | 25th - 28th NOV</h3>
                <h4 className='text-white font-medium py-[3px]' >EXTRA 25% OFF ON EVERYTHING 🛒</h4>
                <a className='text-white underline-hype relative' href="">READY YOUR CARTS</a>
            </div>
            <section className="main-banner flex items-end lg:items-center  justify-center lg:justify-end bg-cover w-full h-[70vh] bg-[url('https://images.puma.com/image/upload/f_auto,fl_lossy,q_60,w_543/regional/~regional~IND~others~KOP~November+2022~Black+Friday+~BF-sale-mobile.gif/fmt/gif/fmt/gif')]  lg:bg-[url('https://images.puma.com/image/upload/f_auto,fl_lossy,q_60,w_1440/regional/~regional~IND~others~KOP~November+2022~Black+Friday+~Black-friday-desktop.gif/fmt/gif/fmt/gif')] bg-no-repeat">
                <div className="container-fluid  m-16">
                    <div className="banner-container text-center">
                        <h1 className='text-white font-medium text-3xl'>CAN'T WAIT FOR BLACK FRIDAY?</h1>
                        <h2 className='text-white text-2xl my-3'>SHOP NOW AT EXTRA 25% OFF ON SELECT STYLES</h2>
                        <div className="main-buttons mt-6 mb-4">
                            <a href="" className='text-black py-3 px-4 font-medium bg-slate-200 mx-2 text-md uppercase'>For Him</a>
                            <a href="" className='text-black py-3 px-4 font-medium bg-slate-200 mx-2 text-md uppercase'>For Her</a>
                        </div>
                        <span className='text-sm text-white'>Discounts auto-applied at checkout</span>
                    </div>
                </div>
            </section>
            <section className=" mt-3 flex items-center w-full h-[70vh] bg-no-repeat bg-cover bg-[url('https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/~regional~IND~others~KOP~November+2022~New+Arrival~Cc-Desktop_1440x500_1.jpg/fmt/jpg/fmt/png')]">
                <div className="container px-16">
                    <div className="latest-cotent">
                        <h1 className='text-white font-bold text-6xl'>FLAUNT LATEST
                            FITS
                        </h1> 
                        <h2 className='text-white text-xl mt-3'>NEW ARRIVALS</h2>
                        <div className="main-buttons mt-6 mb-4">
                            <a href="" className='text-black py-3 block lg:inline-block  px-4 font-medium text-center bg-slate-200  text-md uppercase'>Shop Men</a>
                            <a href="" className='text-black py-3  block lg:inline-block px-4 font-medium text-center bg-slate-200  my-4 lg:mx-4  text-md uppercase'>Shop women</a>
                            <a href="" className='text-black py-3 block lg:inline-block  px-4 font-medium text-center bg-slate-200  text-md uppercase'>Shop winter wear</a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero