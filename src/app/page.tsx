import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import { Button } from '@/components/Button'

const clients = [
  ['Shopify', logoFamilyFund],
  ['GAP', logoUnseal],
  // ['Balenciaga', logoMailSmirk],
  // ['Pawn Stars', logoHomeWork],
  // ['University Of Michigan', logoGreenLife],
  // ['Livegistics', logoPhobiaLight],
  // ['Oakland University', logoBrightPath],
  // ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24  bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      {/* @ts-ignore */}
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Clients who trust us to deliver
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image width={100} height={100} src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
    {/* @ts-ignore */}
      <SectionIntro
        title="Harnessing technology for conversions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>We're not just developers; we're your strategic partners in growth. Our team combines deep technical knowledge with a passion for solving real-world business challenges. Our expertise allows us to build web solutions that are robust, scalable, and custom-made for your business needs</p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                    width={100} height={100}
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={caseStudy.year} className="font-semibold">
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We take care of the journey from MVP to production in your application. If your tech team is too busy we take care of the rest.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Startups, Supercharged">
            Cass&York drives innovation by providing cutting-edge product solutions. Partner with us to bring your disruptive ideas to life and accelerate your growth with custom web & cloud applications
            </ListItem>
            <ListItem title="E-commmerce, Elevated">
              We can can help build a robust API for your store. Whether it's a custom API or you need to integrate with a third party API.
            </ListItem>
            <ListItem title="Legacy Systems, Reimagined">
              Bring your old systems into the modern age. We can help you migrate your old ecommerce store to Shopify as a custom solution.
            </ListItem>
         
         
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Cass&York is a full-service software development company of engineers, designers, and developers. Mobile app development and custom software solutions in the United States',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">We Help Your Business Grow Organically</h1>
          <p className="mt-6 text-xl text-neutral-600">We help venture funded B2B Saas dominate break into their industry by helping them build and grow faster, and grow faster
          </p>
          <Button className='mt-6' href="/free">
            Request my product review
          </Button>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Daniel Burwen', logo: logoPhobiaDark }}
      >
        ...Versatile at both back end trouble shooting, as well as front end tasks...Highly Recommend
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
