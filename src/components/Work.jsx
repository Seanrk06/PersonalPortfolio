import React from "react";

function Work() {
  return (
    <div className="pt-16 px-4 sm:px-6 lg:px-8 lg:pt-24 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Experience
      </h1>
      <p className="text-lg mt-4 leading-6 text-gray-500">
        {/* A little about me */}
      </p>
      <ol className="mt-6 space-y-4">
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Education
          <p className="text-lg leading-6 text-gray-500">- Purdue University</p>
{/*           <p className="text-lg leading-6 text-gray-500">- 3.7 Unweighted GPA</p>  */}
{/*           <p className="text-lg leading-6 text-gray-500">- 10 AP Classes</p> */}
        </li>
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Extra Curriculars
{/*           <p className="text-lg leading-6 text-gray-500">- Officer of national and regional board of Sigma Alpha Rho fraternity</p>
          <p className="text-lg leading-6 text-gray-500">- Hackathon organizer for STEMist Education linked <a className="underline" href="https://joinstemist.org/">here</a></p>
          <p className="text-lg leading-6 text-gray-500">- Technology Club Co-President linked <a className="underline" href="https://technologyclub.netlify.app/">here</a></p>
          <p className="text-lg leading-6 text-gray-500">- NASA Hunch Insect Nano Lab Co-Leader linked <a className="underline" href="https://www.crsd.org/site/default.aspx?PageType=3&DomainID=487&ModuleInstanceID=64355&ViewID=6446EE88-D30C-497E-9316-3F8874B3E108&RenderLoc=0&FlexDataID=96645&PageID=4957">here</a></p>
          <p className="text-lg leading-6 text-gray-500">- Computer Science Club Secretary</p>
          <p className="text-lg leading-6 text-gray-500">- Rho Kappa, Business, and English Honors Society</p> */}
        </li>
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Awards
{/*           <p className="text-lg leading-6 text-gray-500">- Recipient of the Widener Leadership Award</p>
          <p className="text-lg leading-6 text-gray-500">- Interviewed and quoted by the Jewish Exponent</p>
          <p className="text-lg leading-6 text-gray-500">- One of 300 students nationally selected to present a nano lab prototype for the International National Space Station at the Nasa Hunch Final Design Review in Houstan</p> */}
        </li>
        <li className="text-2xl text-white text-semibold text-center mb-5">
          Work
          <p className="text-lg leading-6 text-gray-500">- Research Assistant at Abington Neurological Associates</p>
          <p className="text-lg leading-6 text-gray-500">- Engineering Intern at Action Manufacturing Company</p>
        </li>
      </ol>
      <a
        class="mt-5 inline-flex w-full items-center justify-center rounded-md border border-transparent outline-3 outline py-3 text-base font-medium text-white shadow-sm button_slide slide_right "
        download="./Resume 7_9_24.pdf"
        href="./assets/Resume/Resume 7_9_24.pdf"
      >
        Download Full Resume
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
