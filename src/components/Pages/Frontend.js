import React from 'react'

function Frontend() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
    <header className='text-center mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text mb-4'>Frontend Development</h1>
      <p className='text-2xl text-black font-bold'>Build visually stunning and highly interactive user interfaces with our frontend development expertise.</p>
    </header>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Responsive Design</h2>
        <p className='text-lg mb-4'>
          Create adaptable layouts that provide an optimal viewing experience across all devices. Our designs ensure seamless interactions, whether on mobile, tablet, or desktop.
        </p>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Interactive Features</h2>
        <p className='text-lg mb-4'>
          Engage users with dynamic elements like animations, transitions, and interactive components that enhance user experience and satisfaction.
        </p>
      </div>
    </section>
  </div>
  )
}

export default Frontend
