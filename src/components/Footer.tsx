import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { handleNewsletter } from '@/app/server/actions'

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
 
  {
    title: 'Services',
    links: [
      { title: 'Shopify App Development', href: '/services/shopify-app-development' },
      { title: 'E-commerce Store Development', href: '/services/web-development' },
      { title: 'Conversion Rate Optimization', href: '/services/cro' },
      { title: 'Page Speed Optimization', href: '/services/site-speed-optimization' },
      { title: 'Custom E-commerce Integrations', href: '/services/ecommerce-integrations' },
      { title: 'Automation', href: '/services/automation' },
    ],
  },

  
  {
    title: 'Industries',
    links: [
      { title: 'E-Commerce & Retail', href: '/about' },
      { title: 'DTC E-commerce', href: '/process' },
      { title: 'B2B E-commerce', href: '/blog' },
      { title: 'Subscription Based', href: '/contact' },
    ],
  },
  {
    title: 'Freebies',
    links: [
      { title: 'Free One Page Tune Up', href: '/freebies/cro' },
      { title: 'Free Full SEO Audit', href: '/freebies/audit' },
      { title: 'Free Product Page Teardown', href: '/freebies/teardown' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      { title: 'sales@cassyork.com', href: 'mailto:sales@cassyork.com' },
      { title: 'support@cassyork.com', href: 'mailto:support@cassyork.com' },
    ],
  },
  
 
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-5">
        {navigation.map((section) => (
          <li key={section.title} className=' w-full'>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4  text-sm text-neutral-700">
              {section.links.map((link) => (
                <li key={Math.random()} className="mt-4 ">
                  <Link
                    href={link.href}
                    className="transition  hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}


function NewsletterForm() {
  return (
    <form action={handleNewsletter} className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4">
          <div className='col-span-3'>

          <Navigation />
          </div>
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Cass&York, LLC. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </footer>
  )
}
