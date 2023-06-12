export default function Contact() {
  return (
    <div className="overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            
          </p>
        </div>
        <div className="mt-12">
          <form
            netlify-honeypot="bot-field"
            name="contact"
            method="post"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-white"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-white"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent outline-3 outline py-3 text-base font-medium text-white shadow-sm button_slide  slide_right focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
