import React from 'react'

function AndroidDevelopment() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
    <header className='text-center mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text mb-4'>Android Development</h1>
      <p className='text-xl text-black'>
        Crafting high-performance Android applications that deliver seamless user experiences.
      </p>
    </header>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Custom Android Apps</h2>
        <p className='text-lg mb-4'>
          Our team specializes in developing custom Android applications tailored to your business needs. Whether you're looking for a simple utility app or a complex, feature-rich solution, we leverage the latest technologies to bring your vision to life.
        </p>
        <button className='bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded hover:from-purple-800 hover:to-blue-400'>
          Learn More
        </button>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Performance Optimization</h2>
        <p className='text-lg mb-4'>
          We ensure that your Android application runs smoothly and efficiently. From optimizing app performance to reducing load times, our experts employ best practices to enhance user satisfaction and engagement.
        </p>
        <button className='bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded hover:from-purple-800 hover:to-blue-400'>
          Learn More
        </button>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>UI/UX Design</h2>
        <p className='text-lg mb-4'>
          Our designers focus on creating intuitive and engaging user interfaces that enhance the overall user experience. We blend creativity with functionality to build interfaces that are both visually appealing and user-friendly.
        </p>
        <button className='bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded hover:from-purple-800 hover:to-blue-400'>
          Learn More
        </button>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>App Maintenance</h2>
        <p className='text-lg mb-4'>
          Post-launch support is crucial for any successful application. We provide comprehensive maintenance services to ensure your app remains up-to-date, secure, and performs optimally with regular updates and bug fixes.
        </p>
        <button className='bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded hover:from-purple-800 hover:to-blue-400'>
          Learn More
        </button>
      </div>
    </section>
  </div>
  )
}

export default AndroidDevelopment
