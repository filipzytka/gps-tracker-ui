import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-Time Updates',
    description:
      'Receive live location data, empowering you to act swiftly and stay informed at every moment.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Data Access',
    description: 'State-of-the-art encryption ensures your tracking information remains confidential and protected.',
    icon: LockClosedIcon,
  },
  {
    name: 'Automated Location Logs',
    description: 'Keep a reliable history of movements with scheduled backups, so you never miss a detail.',
    icon: ServerIcon,
  },
]

const Feature = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Track Smarter, Not Harder</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Seamless Tracking Workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Effortlessly monitor movements with an intuitive interface. Advanced tracking tools ensure precision, reliability, and peace of mind.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Feature