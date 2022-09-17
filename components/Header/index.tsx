import React from 'react'
import Link from 'next/link'
import { BeakerIcon } from '@heroicons/react/24/solid'


export default function Header() {
  return (
    <>
    <header>
      <div id='header' className='w-full bg-sky-700 py-10  px-10 md:px-0'>
          <div id='header-menu' className='container mx-auto'>
            <div className='flex justify-between'>
              <div id='logo' className='basis-1/3'>
                <img src='https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/logo-niagahoster-1659527365.svg' />
              </div>
              <div id='menu' className='basis-1/3'>
              <ul className='text-slate-300 flex gap-2'>
                  <li><a href='Hosting'>Hosting</a></li>
                  <li><a href='Hosting'>VPS</a></li>
                  <li><a href='Hosting'>Domain</a></li>
                  <li><a href='Hosting'>Website</a></li>
                  <li><a href='Hosting'>Promo</a></li>
              </ul>
              </div>
              <div id='login' className='flex'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                <button className='bg-transparent border rounded px-3 py-1 text-white border-white'>
                  Login

                </button>
              </div>
            </div>
          </div>
          <div id='banner' className='container mx-auto mt-10'>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='md:basis-1/2 mb-10 md:mb-0  flex items-center '>
                <div className=''>
                  <h1 className='text-3xl font-bold text-white pb-5'>Niagahoster partner</h1>
                  <p className='text-white text-base pb-5'>Gabung sekarang untuk membuat bisnis web hosting Anda menjadi lebih profesional dan dapatkan fitur Integrasi User Management, White Label Invoice dan Markup Harga dengan harga yang jauh lebih murah.</p>
                  <button className='bg-orange-600 px-10 py-3 rounded text-white font-bold'>
                    Daftar Sekarang
                  </button>
                </div>
              </div>
              <div className='md:basis-1/2 md:flex md:justify-end'>
                <img className='w-full md:w-3/4 ' src='https://niagaspace.sgp1.cdn.digitaloceanspaces.com/assets/images/nipa-hero-1652944608.webp' />
              </div>
            </div>

          </div>
      </div>
      


    </header>
    </>

    
  )
}
