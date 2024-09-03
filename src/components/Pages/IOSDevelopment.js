import React from 'react'

function IOSDevelopment() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
    <header className='text-center mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text mb-4'>iOS Development</h1>
      <p className='text-xl text-black'>Design and develop cutting-edge iOS applications that stand out in the App Store with exceptional usability and performance.</p>
    </header>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Swift Programming</h2>
        <p className='text-lg mb-4'>
          Leverage the power of Swift to build high-performance applications with robust functionality and seamless integration with iOS features.
        </p>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>User Experience Design</h2>
        <p className='text-lg mb-4'>
          Focus on creating intuitive interfaces and smooth interactions that enhance the overall user experience of your iOS applications.
        </p>
      </div>
    </section>
  </div>
  )
}

export default IOSDevelopment
