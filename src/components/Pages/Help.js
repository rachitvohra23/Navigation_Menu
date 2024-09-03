import React from 'react'

function Help() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <header className='text-center mb-12'>
        <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text mb-4'>Help</h1>
        <p className='text-2xl text-black font-bold'>Find the assistance you need with our comprehensive help resources and support.</p>
      </header>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>FAQs</h2>
          <p className='text-lg mb-4'>
            Explore frequently asked questions to get quick answers and solutions to common issues.
          </p>
        </div>

        <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
          <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Contact Support</h2>
          <p className='text-lg mb-4'>
            Reach out to our support team for personalized assistance and resolution of specific queries or issues.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Help
