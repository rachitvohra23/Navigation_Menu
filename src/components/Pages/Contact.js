import React from 'react'

function Contact() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
    <header className='text-center mb-12'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-purple-900 to-blue-900 text-transparent bg-clip-text mb-4'>Contact Us</h1>
      <p className='text-2xl text-black font-bold'>Get in touch with us for any inquiries, feedback, or support.</p>
    </header>

    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Email</h2>
        <p className='text-lg mb-4'>
          Reach out to us via email at <a href="mailto:support@example.com" className='text-blue-400 hover:underline'>dice@antrepriz.com</a>. We strive to respond to all inquiries within 24 hours.
        </p>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Phone</h2>
        <p className='text-lg mb-4'>
          For immediate assistance, call us at <a href="tel:+1234567890" className='text-blue-400 hover:underline'>8085056111</a>. Our team is available Monday through Friday from 9 AM to 6 PM.
        </p>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Live Chat</h2>
        <p className='text-lg mb-4'>
          Chat with us in real-time by clicking the chat icon on the bottom right corner of your screen. We are here to help you with any questions or concerns.
        </p>
      </div>

      <div className='p-6 bg-black text-white shadow-lg rounded-lg'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-900 to-blue-500 text-transparent bg-clip-text mb-4'>Office Location</h2>
        <p className='text-lg mb-4'>
          Visit us at our office Dice EnterPrises Pvt Ltd located at 10th floor, The Kode Building , Baner Pashan Link Road, Pune-411020 Range Hils Road, Shivaji Nagar Pune Maharashtra 41120 India. We are open for visits by appointment only, so please contact us to schedule a meeting.
        </p>
      </div>
    </section>
  </div>
  )
}

export default Contact
