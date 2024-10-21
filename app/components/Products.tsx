import React from 'react'

const products = [
  {
    id: 1,
    title: "Mexican Burger",
    category: "fixing",
    price: "200.00",
    imageUrl: "https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?w=740&t=st=1728298005~exp=1728298605~hmac=a6abe122770346c53ee3b1decd0951534ff522d3ea1f718813421df85f5b952d",
    bgColor: "bg-amber-400"
  },

  {
    id: 2,
    title: "Cheesy burger",
    category: "Delight",
    price: "150.00",
    imageUrl: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1728298972~exp=1728302572~hmac=08b09f63ba3b0f5f70195ec101fb7496a427b4d33a10aa6514614178d1d6453f&w=740",
    bgColor: "bg-teal-400"
  },

  {
    id: 3,
    title: "Family Burger",
    category: "fixing",
    price: "400.00",
    imageUrl: "https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1728298972~exp=1728302572~hmac=08b09f63ba3b0f5f70195ec101fb7496a427b4d33a10aa6514614178d1d6453f&w=740",
    bgColor: "bg-amber-400"
  },
]


const Products = () => {
  return (
    <div>
      <div className='p-1 flex flex-wrap items-center justify-center mb-6'>
        {products.map((products) => (
          <div key={products.id} className={` m-6 relative overflow-hidden ${products.bgColor} rounded-lg shadow-lggroup max-w-sm`}>
            <svg className='absolute bottom-0 left-0 mb-8 scale-150 hover:scale-[1.65] transition-transform ' viewBox='0 0 375 283' fill='none' opacity={(0.1)}>
              <rect x="159.52" y="152" width="152" height="152" rx="8" transform='rotate(-45 359.52 175)' fill='white' />
              <rect y="107.48" width="152" height="152" rx="8" transform='rotate(-45 0 107.48)' fill='white' />
            </svg>

            <div className='relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform'>
              <div className='block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3'
                style={{ background: "radial-gradient(black, transparent 50%", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1", opacity: 0.2 }}></div>
              <img className='relative w-52' src={products.imageUrl} alt={products.title} />
            </div>

            <div className='relative text-white px-6 pb-6 mt-6 '>
              <span className='block opacity-75 -mb-1'>{products.category}</span>

              <div className='flex justify-between'>
                <span className='block font-semibold text-xl'>{products.title}</span>
                <span className='block bg-white rounded-full text-orange-500 text-xs font-bold px-6 py-2 leading-none items-center'>{products.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
