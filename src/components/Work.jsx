import React from 'react'

function Work() {
  return (
    <div className='pt-16 px-4 sm:px-6 lg:px-8 lg:pt-24 text-center'>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Work
        </h1>
        <p className="text-lg mt-4 leading-6 text-gray-500">
            Below are some jobs I've had.
          </p>
        <ol className='mt-6 space-y-4'>
            <li className='text-2xl text-white text-semibold text-center mb-5'>Counselor-in-Training (CIT)</li>
            <li className='text-2xl text-white text-semibold text-center mb-5'>Taco Bell Cashier</li>
            <li className='text-2xl text-white text-semibold text-center mb-5'>Busser At a Restaurant</li>
        </ol>
        <a class="mt-5 inline-flex w-full items-center justify-center rounded-md border border-transparent outline-3 outline py-3 text-base font-medium text-white shadow-sm button_slide slide_right" href="/#">Download CV</a>

    </div>
  )
}


export default Work

