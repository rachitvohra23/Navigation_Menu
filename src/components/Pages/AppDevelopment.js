import React from 'react'

function AppDevelopment() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <header className='text-center mb-12'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>App Development</h1>
        <p className='text-xl text-black'>Build high-performance applications that deliver exceptional user experiences across various platforms.</p>
      </header>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>iOS App Development</h2>
          <p className='text-lg mb-4'>
            Create intuitive and responsive applications for iOS devices with smooth performance and adherence to Apple’s guidelines.
          </p>
        </div>

        <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Android App Development</h2>
          <p className='text-lg mb-4'>
            Develop feature-rich Android applications that provide a seamless user experience across a wide range of devices.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AppDevelopment
