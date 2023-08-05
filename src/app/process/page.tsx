import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

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
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
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

function Discover() {
  return (
    <Section title="Discovery" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">

        <p>
          We begin by gaining a comprehensive  <strong className="font-semibold text-neutral-950">understanding</strong> of your business, objectives, and challenges. This phase involves in-depth discussions, industry research, and an audit of your existing systems and processes.

        </p>
        <p>
          We offer  <strong className="font-semibold text-neutral-950">low cost</strong> Proof of Concepts (POCs) to demonstrate the value of our solutions. This is a great way to get buy-in from stakeholders and to test the feasibility of our solutions.
        </p>
        <p>Order one <span className='underline'>
          here

        </span>
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
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          In the build phase, your vision takes shape as we transform ideas into robust, scalable, and innovative digital solutions.
        </p>
        <p>
          We prioritize a user-centric approach, focusing on creating a seamless and engaging user experience that aligns with your brand identity.
          </p> 
          <p>

            With design blueprints in hand, our developers get to work. They write clean, efficient code using the latest technologies and frameworks that meet your project's specific needs. Throughout this phase, we follow an Agile development methodology. This allows for flexibility and adaptability, with regular sprints and checkpoints to ensure the project is on track and aligned with your expectations.
          </p>
          <p>
            Whether it's a mobile app, a custom software solution, or an e-commerce platform, we ensure that the final product is robust, scalable, and secure, ready to drive your business growth and set you apart from the competition.
          </p>
          <p>
            We maintain constant communication throughout this phase, keeping you informed and involved. Your feedback is essential as we refine and perfect the solution, ensuring the final product not only meets but exceeds your expectations.

          </p>
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Ensuring Continuous Performance and Growth" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Our support and optimization services provide ongoing enhancements to keep your digital solution running optimally and adapting to your evolving needs.
        </p>
        <p>
        our commitment to your success doesn't end at deployment. We believe in forming long-term partnerships, and that's where our support and optimization services come into play.  </p>
   
<p>
Our dedicated support team is always ready to assist you with any technical issues or queries. We offer various levels of support, from routine system checks and maintenance to on-demand troubleshooting.  </p>
<p>
Remember, digital landscapes and customer expectations change rapidly. With our ongoing support and optimization, your solution remains current, relevant, and aligned with your business goals. We're here for you, today and tomorrow, helping your business grow and thrive in the digital world.
        
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

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>At Cass&York, our approach merges technical expertise with deep industry knowledge, consistently aligning with the strategic visions of our elite clientele.</p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="User-centricity">
         We believe that by putting the user at the center of everything we do, we can create solutions that drive engagement, retention, and satisfaction for businesses.

         
          </GridListItem>
          <GridListItem title="Innovation">
          We are committed to pushing boundaries and challenging the status quo to bring about positive change in the industry through innovative design and digital transformation.
          </GridListItem>
          <GridListItem title="Transparency">
          We believe in being open and transparent in our approach, building trust with our clients and partners through clear communication and collaboration.
          </GridListItem>
          <GridListItem title="Continuous Improvement">
          We are dedicated to continuously improving our solutions and processes to stay ahead of the curve and meet the evolving needs of businesses.
          </GridListItem>
          <GridListItem title="Quality">
          We strive for excellence in everything we do, delivering high-quality solutions that meet and exceed the expectations of our clients.
          </GridListItem>
          <GridListItem title="Sustainability">
          We are committed to creating solutions that are not only effective but also sustainable, taking into account the long-term impact on the environment and society.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Transforming Visions into Reality, One Step at a Time" title="Our process is a journey of collaboration, innovation, and results">
        <p>
          Every successful project at Cass&York is rooted in our methodical and collaborative process. While we tailor our approach to each client's unique needs, our process generally encompasses the following stages:
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
