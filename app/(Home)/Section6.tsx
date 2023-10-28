'use client'

import Link from 'next/link'
import { SectionWrapper } from '@/components/HOC'
import FormSection from '@/components/Contact/Contact'
import Intro from '@/components/Intro/Intro'
import Contact from '@/components/Contact/Contact'

function Section_6() {
  return (
    <>
      <section
        className="min-h-screen flex flex-col lg:flex-row justify-center mx-auto py-20 sm:py-40 w-11/12 animate-slideleftT2"
        id="#Section6"
      >
        {/* <div className="flex flex-col lg:flex-row justify-center mx-auto"> */}
        <div className="flex flex-col lg:flex-row w-full lg:w-full bg-transparent rounded-xl mx-auto shadow-lg overflow-hidden">
          {/* Introduction section */}
          <Intro />
          {/* Form Section */}
          <Contact />
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default SectionWrapper(Section_6, 'Section_6')
