import React from 'react'

export default function TemukanDomain() {
  return (
    <>
    <div className='bg-slate-400 w-full py-10 px-10'>
        <div className='container text-center'>
            <div className='md:w-1/2 items-center mx-auto'>
                <h2 className='text-3xl font-bold'>Pilih Nama Domain Impian Anda</h2>
                <p className='text-base'>Tersedia beragam nama domain untuk segala keperluan Anda</p>
                <form className='flex'>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />            
                    <button className='bg-amber-500 px-5 py-2 text-base text-white'>Cari</button>
                </form>
                <div className='text-base flex'>
                    <div><span>.com</span> Rp 115.000</div>
                    <div><span>.com</span> Rp 115.000</div>
                    <div><span>.com</span> Rp 115.000</div>
                    <div><span>.com</span> Rp 115.000</div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
