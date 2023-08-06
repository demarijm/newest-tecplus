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

export default function page() {
  return (
    <>
      <PageIntro eyebrow="Product Development" title="Product is a journey of collaboration, innovation, and results">
        <p>
          At Cass&York, we know the digital landscape like the back of our hand. We also understand that every business journey is as unique as a fingerprint. Whether you're a fledgling start-up or an industry leader, we offer versatile product help and development services designed to bring your digital aspirations to life.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

<ContactSection call="Ready to start? Click below"/>
    </>

  )
}

function Discover() {
  return (
    <Section title="The Nuts and Bolts of Product Development" image={{ src: imageWhiteboard }}>
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
    <Section title="Round-the-clock help" image={{ src: imageLaptop, shape: 1 }}>
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
