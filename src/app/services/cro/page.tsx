// @ts-nocheck
import { Blockquote } from '@/components/Blockquote'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import React from 'react'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { ContactSection } from '@/components/ContactSection'
import { Values } from '../layout'


// Is Your Website Hitting the Right Notes? 🎵
// Introducing Web Tune-Up: Our expert touch for your site's redesign and thorough analysis. See instant results and higher conversions in just 3 days!
// ✅ Streamlined Design
// ✅ Insightful Analysis
// ✅ Maximized Performance

// Get your website in harmony with your business goals.
// [Start Your Web Tune-Up Now]

export default function page() {
  return (
    <>
      <PageIntro eyebrow="100% Risk Free" title="Is Your Website Hitting the Right Notes? 🎵">
        <p>
        Introducing Web Tune-Up: Our expert touch for your site's redesign and thorough analysis. See instant results and higher conversions in just 3 days!
        </p>
      </PageIntro>
      <CTA />
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        {/* <Deliver /> */}
      </div>

      <Values />

<ContactSection call="Ready to start? Click below"/>
    </>

  )
}

function Discover() {
  return (
    <Section title="Data Driven Conversion" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>

          Our team of industry-leading developers, designers, and strategists are eager to transform your concept into a robust digital product. We blend our technical know-how with a deep understanding of your business requirements to create solutions that work as hard as you do.
        </p>
        <p>
          From bespoke software solutions to interactive mobile applications and high-performance e-commerce platforms, we create products that pack a punch. What's more, we ensure that these solutions not only meet your unique specifications but also deliver an engaging, user-friendly experience to your audience.
        </p>

      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Current System evaluation</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Competitor Analysis</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Increase the results that matter" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          In the digital realm, it's not enough to simply create a product and set it loose in the world. Continuous support, maintenance, and fine-tuning are essential to ensure your product stands strong in an ever-evolving landscape.
        </p>
        <p>

          Our product help services are comprehensive, reliable, and – most importantly – always available. Whether you need swift issue resolution, routine maintenance, or updates to stay ahead of the curve, we've got your back. We're here to keep your digital solutions performing optimally and aligned with your business goals.
        </p>

        <p>
          Plus, our product help goes beyond issue resolution – it's about empowering your team. We provide the resources and training needed to leverage your digital solutions effectively. We're not just handing over a product; we're equipping you to wield it with confidence.
        </p>


      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Cass&York were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Tailor-Made for your business" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          At Cass&York, we know there's no one-size-fits-all solution. That's why we are committed to understanding your specific vision, challenges, and requirements. This understanding informs our tailor-made approach, enabling us to align our services with your unique goals and strategies.
        </p>
        <p>

          Whether you're planning to launch a brand-new digital product, or looking to enhance an existing one, we're here to help you every step of the way. Our mission? To deliver products that don't just meet your expectations – they leap over them, leading to significant growth and success for your business.
        </p>


      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Post Launch Monitoring">Regularly tracking and analyzing system performance, user interactions, and feedback to identify potential issues and areas for improvement.</ListItem>
        <ListItem title="Technical Support">Providing ongoing assistance with any technical issues or questions that may arise, from routine system checks and bug fixes to troubleshooting more complex issues.</ListItem>
        <ListItem title="Continuous Optimization">Making data-driven updates and enhancements to improve user experience, add new features, and ensure the solution stays current with changing market trends and business goals.</ListItem>
      </List>
    </Section>
  )
}


function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}





function CTA() {
  return (
    <div className="relative isolate bg-white  py-12 ">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="50%"
            y={-64}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-64} className="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
      <div className="mx-auto max-w-xl lg:max-w-5xl">
      
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action="#" method="POST" className="lg:flex-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                What page should we review?
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                What's your brand name?

                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Where should we send your Free Quick Win Design?

                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <span>
                  Gmail, Yahoo, Hotmail won’t be accepted*
                  </span>
                </div>
              </div>
             
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                How did you hear about Us?
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#1338BF] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get My Free Tune Up
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-500">
            No Credit Card Required • 100% Risk Free

            </p>
            <p className="mt-4 text-sm leading-6 text-gray-500">
            By submitting for a Free Oddit Quick Win you agree to our terms of use

              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none">
            <img className="h-12 w-auto" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
            <figure className="mt-10">
              <blockquote className="text-lg font-semibold leading-8 text-gray-900">
                <p>
                  “I was able to improve our average cart value just from their free audit”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=96&h=96&q=80"
                  alt=""
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-base font-semibold text-gray-900">Brenna Goyette</div>
                  <div className="text-sm leading-6 text-gray-600">CEO of Workcation</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
