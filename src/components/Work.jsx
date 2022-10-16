import React from "react";

function Work() {
  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8 lg:pt-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Work
      </h1>
      <p className="text-lg mt-4 leading-6 text-gray-500">
        Below are some jobs I've had.
      </p>
      <ol className="mt-6 space-y-4">
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Counselor in Training
          <p className="text-lg leading-6 text-gray-500">- Helped supervise a group of kids for a Summer under the leadership of a head counselor.</p>
        </li>
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Taco Bell Cashier
          <p className="text-lg leading-6 text-gray-500">- Worked as a cashier for both the drive-through and front register.</p>
          <p className="text-lg leading-6 text-gray-500">- Oversaw customers’ meals from the kitchen in order to make sure they received their complete order</p>
        </li>
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Neurology Practice Assistant
          <p className="text-lg leading-6 text-gray-500">- Managed data relating to patient records in research involving migraine patients.</p>
          <p className="text-lg leading-6 text-gray-500">- Oversaw patient-facing facilities and made sure equipment was maintained properly.</p>
          <p className="text-lg leading-6 text-gray-500">- Cataloged medication for study subjects.</p>
        </li>
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Busser At a Restaurant
          <p className="text-lg leading-6 text-gray-500">- Addressed service-related needs of the customers in addition to team support of coworkers.</p>
        </li>
      </ol>
      <a
        class="mt-5 inline-flex w-full items-center justify-center rounded-md border border-transparent outline-3 outline py-3 text-base font-medium text-white shadow-sm button_slide slide_right "
        download="./assets/Resume/Resume for website.pdf"
        href="./assets/Resume/Resume for website.pdf"
      >
        Download Resume
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 ml-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </a>
    </div>
  );
}

export default Work;
