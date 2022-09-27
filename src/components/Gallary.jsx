import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";

const project = [
  {
    name: "Technology Club Website",
    description: "I built this website for a club I am the co-president whose goal is to increase student understanding of modern technology through discussion groups, demonstrations, and hands-on experiences. It was not submitted for a competition.",
    submission: "",
    source: "./assets/Projects/TechnologyClub.png",
    code: "https://github.com/Seanrk06/CRSTechnologyClub",
    link: "https://technologyclub.netlify.app/",
  },
  {
    name: "ForgetMeNot Website",
    description:'Teachers and students alike have struggled with virtual learning since the start of the pandemic. This website can help with productivity of students and management from teachers.',
    submission: "https://devpost.com/software/forget-me-not-93xuw2",
    code: "https://github.com/Seanrk06/ForgetMeNot",
    source: "./assets/Projects/ForgetMeNot.png",
    link: "https://enigmatic-springs-17250.herokuapp.com/",
  },
  {
    name: "RefugeForUkraine Website",
    description: "This award winning website was designed to track the Russia-Ukraine War visually to send help where it’s most needed.",
    code: "https://replit.com/@KamyaMiles/Refuge-for-Ukraine?v=1",
    source: "./assets/Projects/RefugeForUkraine.png",
    link: "https://refuge-for-ukraine.kamyamiles.repl.co/",
    submission: "https://devpost.com/software/refuge-for-ukraine",
  },
  {
    name: "Study Buddy Website",
    description: "The Covid-19 pandemic has increased anxiety globally. Study Buddy, was made to help young adults cope with social anxiety. It is not hosted live.",
    source: "./assets/Projects/StuddyBuddy.png",
    link: "",
    code: "https://github.com/Kdm2633/yphacks",
    submission: "https://devpost.com/software/study-buddy-rit0sq"
  },
  // More projects...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallary() {
  return (
    <div>
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8"
        >
          {project.map((project) => (
            <li key={project.name} className="relative">
              <Popover>
                {({ open }) => (
                  <>
                      <div className="mx-auto flex max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Popover.Button>
                          <div
                            className={classNames(
                              project.current
                                ? "ring-2 ring-offset-2 ring-indigo-500"
                                : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500",
                              "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                            )}
                          >
                            <img
                              src={project.source}
                              alt=""
                              className={classNames(
                                project.current ? "" : "group-hover:opacity-75",
                                "object-cover pointer-events-none"
                              )}
                            />
                          </div>
                        </Popover.Button>
                      </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
                        <div className="bg-customGray text-white rounded-lg p-5 w-fit z-10">
                          <div className="text-center ">
                            <h1 className="md:text-4xl  sm:text-md lg:text-4xl font-bold tracking-tight mb-5">{project.name}</h1>
                            <p className="md:mt-1 sm:text-sm">Description: {project.description}</p>
                            <p className="md:mt-1 sm:text-sm">Source Code: <a className="underline" href={project.code}>{project.code}</a></p>
                            <p className="md:mt-1 sm:text-sm">Competition Submission: <a className="underline" href={project.submission}>{project.submission}</a></p>
                            <p className="md:mt-1 sm:text-sm">Live Website: <a className="underline" href={project.link}>{project.link}</a></p>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
