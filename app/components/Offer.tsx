"use client"
import React from 'react'

type Offer = {
  title: string,
  description: string,
}
const SpecialOffer: React.FC = () => {
const offers: Offer[] = [
  {
    title: "Happy hour",
    description: "5PM se 7PM tak tamam drinks per 50% off hasil kren",
  },

  {
    title: "Special Deal",
    description: "Free complimentry drink ka luft uthaen",
  },

  {
    title: "Family Deal",
    description: "Family deal code coupen hasil kren",
  },

  {
    title: "Midnight Deal",
    description: "Midnight deal coupen hasil kren",
  },
];

const handleAlertClick = (description: string) => {
  alert(description);
}

return (
  <section className='py-10'>
    <div className='container mx-auto text-center'>
      <h2 className='font-bold text-4xl mb-6 text-white'>Speacial Offer's</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {offers.map((offer, index) => (
          <button key={index} 
          onClick={() => handleAlertClick(offer.description) }
          className='bg-white rounded-lg shadow-lg text-center hover:bg-gray-300 transition duration-300 transform hover:scale-105'>
            <h3 className='text-2xl font-semibold text-slate-700'>{offer.title}</h3>
            <p className='text-slate-700 mt-3 pb-3'>{offer.description}</p>
          </button>
        ))}
      </div>
    </div>
  </section>
)
}
export default SpecialOffer
