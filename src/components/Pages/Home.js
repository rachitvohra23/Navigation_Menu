import React from 'react'

function Home() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <header className='text-center mb-12'>
        <h1 className='text-5xl font-bold text-gradient mb-4'>Welcome to Our Development Hub</h1>
        <p className='text-xl text-slate-800'>Empowering you with cutting-edge solutions for Frontend, Backend, and App Development.</p>
      </header>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='p-6 bg-white shadow-lg rounded-lg'>
          <h2 className='text-3xl font-bold text-gradient mb-4'>Frontend Development</h2>
          <p className='text-lg text-slate-700 mb-4'>
            Craft stunning user interfaces with our expertise in HTML, CSS, and JavaScript frameworks. We create responsive, interactive designs that enhance user experience and engagement.
          </p>
          <button className='bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 text-white px-4 py-2 rounded hover:bg-gradient-to-l hover:from-purple-600 hover:via-blue-700 hover:to-purple-600'>Learn More</button>
        </div>

        <div className='p-6 bg-white shadow-lg rounded-lg'>
          <h2 className='text-3xl font-bold text-gradient mb-4'>Backend Development</h2>
          <p className='text-lg text-slate-700 mb-4'>
            Build robust and scalable server-side applications. Our backend solutions ensure secure data handling, efficient processing, and seamless integration with your frontend.
          </p>
          <button className='bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 text-white px-4 py-2 rounded hover:bg-gradient-to-l hover:from-purple-600 hover:via-blue-700 hover:to-purple-600'>Learn More</button>
        </div>

        <div className='p-6 bg-white shadow-lg rounded-lg'>
          <h2 className='text-3xl font-bold text-gradient mb-4'>App Development</h2>
          <p className='text-lg text-slate-700 mb-4'>
            Develop high-performance mobile apps for iOS and Android. Our team leverages the latest technologies to deliver intuitive and engaging mobile experiences.
          </p>
          <button className='bg-gradient-to-r from-purple-800 via-blue-800 to-purple-800 text-white px-4 py-2 rounded hover:bg-gradient-to-l hover:from-purple-600 hover:via-blue-700 hover:to-purple-600'>Learn More</button>
        </div>
      </section>
    </div>
  )
}

export default Home
