import React from 'react'

function Work() {
  return (
    <div className='pt-16 px-4 sm:px-6 lg:px-8 lg:pt-24 text-center'>

        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Work Experience
        </h1>
        <p className="text-lg mt-4 leading-6 text-gray-500">
            I would love to hear from you, lets stay in touch.
          </p>
        <ol className='mt-6 space-y-4'>
            <li className='text-3xl text-white text-semibold text-center mb-5'>Counselor-in-Training (CIT)</li>
            <li className='text-3xl text-white text-semibold text-center mb-5'>Taco Bell Cashier</li>
            <li className='text-3xl text-white text-semibold text-center mb-5'>Bussing At Restrount</li>
        </ol>
        <a class="mt-5 inline-flex w-full items-center justify-center rounded-md border border-transparent outline-3 outline py-3 text-base font-medium text-white shadow-sm button_slide  slide_right focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2" href="/#">Download CV<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"><path d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>

    </div>
  )
}


export default Work

