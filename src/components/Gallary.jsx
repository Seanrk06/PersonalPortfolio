
const project = [
  {
    name: 'Technology Club Snapshot',
    description: '3.9 MB',
    source:
      './assets/Projects/TechnologyClub.png',
  },
  {
    name: 'ForgetMeNot Snapshot',
    description: 'Teachers and students alike have struggled with virtual learning since the start of the pandemic. Well "ForgetMeNot" can help with productivity of students and management from teachers!',
    source:
      './assets/Projects/ForgetMeNot.png',
  },
  {
    name: 'RefugeForUkraine Snapshot',
    description: 'This website features an interactive map that shows the displacement of Ukrainian refugees to several neighboring countries. Users can see how refugee movement has changed over the course of the war using a slider. In addition, the map shows the resources of each Ukrainian province so it can be easily seen where people need help the most. There is also have a page dedicated to articles about the war and links to organizations so people can help out.',
    source:
      './assets/Projects/RefugeForUkraine.png',
  },
  {
    name: 'IMG_4985.HEIC',
    description: '3.9 MB',
    source:
      './assets/Projects/TechnologyClub.png',
  },
  // More projects...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
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
                        <div
                          className={classNames(
                            project.current
                              ? 'ring-2 ring-offset-2 ring-indigo-500'
                              : 'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500',
                            'group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                          )}
                        >
                          <img
                            src={project.source}
                            alt=""
                            className={classNames(
                              project.current ? '' : 'group-hover:opacity-75',
                              'object-cover pointer-events-none'
                            )}
                          />
                          <form action={project.link}>
                            <button type="submit" className="absolute inset-0 focus:outline-none">
                              <span className="sr-only">View details for {project.name}</span>
                            </button>
                          </form>
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                          {project.name}
                        </p>
                        <p className="pointer-events-none block text-sm font-medium text-gray-500">{project.description}</p>
                      </li>
                    ))}
                  </ul>
                </section>
    </div>
  )
}
