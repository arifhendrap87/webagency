import React from 'react'
export default function PilihTemplate() {
  return (
    <>
    <div className='w-full py-10 px-10'>
        <div className='container mx-auto'>
            <div className='text-center'>
                <p className='text-base'>Step 1</p>
                <h2 className='text-2xl font-bold'>Pilih Template</h2>
                <h2 className='text-2xl font-bold'>Banyak pilihan desain</h2>
                <p className='text-base'>Pilih satu dari puluhan desain yang tersedia</p>
                <select className="mx-auto block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>All Template</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </select>

                <div className='grid md:grid-cols-4 gap-4'>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    <a>
                        <img className='rounded shadow-xl' src='https://website-builder-v4.srs-x.com/templates/Education/Academy%20of%20Fine%20Arts/thumb.jpg' />
                    </a>
                    

                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
