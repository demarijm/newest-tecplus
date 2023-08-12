// @ts-nocheck
import { Blockquote } from '@/components/Blockquote'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import React from 'react'


// Is Your Website Hitting the Right Notes? 🎵
// Introducing Web Tune-Up: Our expert touch for your site's redesign and thorough analysis. See instant results and higher conversions in just 3 days!
// ✅ Streamlined Design
// ✅ Insightful Analysis
// ✅ Maximized Performance

// Get your website in harmony with your business goals.
// [Start Your Web Tune-Up Now]

export async function leadSubmitted(formData) {
  'use server'
  const reqeustedPage = formData.get('requested-page')
  const companyName = formData.get('company-name')
  const message = formData.get('message')
  const email = formData.get('email')

  const responses = {
    'requested-page': reqeustedPage,
    'company-name': companyName,
    'message': message,
    'email': email
  }
  

  console.log('message', message)
  console.log('requested-page', reqeustedPage)
  console.log('company-name', companyName)
  console.log('email', email)

  const channel = "cro-lead-magnet"

  try {
    // Call the chat.postMessage method using the built-in WebClient
    const result = await slack.chat.postMessage({
      // The token you used to initialize your app
      token: process.env.SLACK_AUTH_TOKEN,
      channel: channel,
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": `New Lead from ${channel},
            \n\n *Requested Page:* ${reqeustedPage}
            \n\n *Company Name:* ${companyName}
            \n\n *Email:* ${email}
            \n\n *Message:* ${message}
            `
          }
        }

      ]
      // You could also use a blocks[] array to send richer content
    });

    // Print result, which includes information about the message (like TS)
    console.log(result);
  }
  catch (error) {
    console.error(error);
  }


}

export default function page() {
  return (
    <>
      <PageIntro eyebrow="100% Risk Free" title="Is Your Website Hitting the Right Notes? 🎵">
        <p className='text-center max-w-2xl text-lg flex justify-center mt-4 w-full'>
        Introducing Web Tune-Up: Our expert touch for your site's redesign and thorough analysis. See instant results and higher conversions in just 3 days!
        </p>
      </PageIntro>
      <CTA />
   

      {/* <Values /> */}

{/* <ContactSection call="Ready to start? Click below"/> */}
    </>

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
    <div className="relative isolate   ">
  
      <div className="mx-auto max-w-4xl px-8 m-12">
      
        <div className="mt-16 bg-gray-100 border p-16 rounded-lg flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
          <form action={leadSubmitted} method="POST" className="lg:flex-auto">
            <div className="flex flex-col gap-x-8 gap-y-6 ">
              <div>
                <label htmlFor="requested-page" className="block text-lgfont-semibold leading-6 text-gray-900">
                What page should we review?
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="requested-page"
                    id="requested-page"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lgsm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-lgfont-semibold leading-6 text-gray-900">
                What's your company name?

                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lgsm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-lgfont-semibold leading-6 text-gray-900">
                Where should we send your Free Tune Up File?
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lgsm:leading-6"
                  />
                  <span>
                  Free emails like Gmail will not be accepted*
                  </span>
                </div>
              </div>
             
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-lgfont-semibold leading-6 text-gray-900">
                How did you hear about Us?
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={2}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lgsm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#1338BF] px-3.5 py-2.5 text-center text-lgfont-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get My Free Tune Up
              </button>
            </div>
            <p className="mt-4 text-center text-lgleading-6 text-gray-500">
            No Credit Card Required • 100% Risk Free

            </p>
            <p className="mt-4 text-center text-lgleading-6 text-gray-500">
            By submitting for a Free Tune Up you agree to our terms of use

              <a href="#" className="font-semibold text-indigo-600">
               {" "} privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
       
        </div>
      </div>
    </div>
  )
}



import clsx from 'clsx'
import { slack } from '@/lib/slack'


function PageIntro({ eyebrow, title, children, centered = false }) {
  return (
    <Container
      className={clsx('mt-24  flex justify-center  text-center', centered && 'text-center')}
    >
      <FadeIn>
        <h1>
          <span className=" text-center flex justify-center font-display text-lg font-semibold text-[#1338BF]">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6  max-w-5xl flex justify-center text-center font-display text-6xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl',
              centered && 'mx-auto'
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'flex justify-center',
            centered && 'mx-auto'
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  )
}
