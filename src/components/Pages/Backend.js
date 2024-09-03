import React from 'react'

function Backend() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
    <header className='text-center mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text mb-4'>Backend Development</h1>
      <p className='text-2xl text-black font-bold'>Develop robust server-side solutions that drive your application’s core functionality and data management.</p>
    </header>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>API Development</h2>
        <p className='text-lg mb-4'>
          Design and implement efficient APIs that facilitate smooth communication between your frontend and backend systems, ensuring reliable data exchange.
        </p>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-800 text-transparent bg-clip-text mb-4'>Database Management</h2>
        <p className='text-lg mb-4'>
          Handle data storage and retrieval with optimized database structures that support your application’s needs and scale with growth.
        </p>
      </div>
    </section>
  </div>
  )
}

export default Backend
