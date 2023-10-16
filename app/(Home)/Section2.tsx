'use client'
// we need to optimise this somehow use of sectionWrapper is not good...
// ~Shubham
import Image from 'next/image'
import React from 'react'
import { values } from '@/constants/aboutUs'
import { SectionWrapper } from '@/components/HOC'

const Section_2 = () => {
  return (
    <>
       <section className="w-full md:p-24" id="#Section_2">
        <h1 className="px-6 mt-32 font-normal text-3xl sm:text-6xl tracking-wide ">
          // OUR CORE WORK VALUES
        </h1>
        <div className=" px-6 mt-12 flex gap-5 justify-center  flex-col md:flex-row">
          {values.map((value, index) => (
            <div
              key={index}
              className="w-1/3 bg-secondary p-12 rounded border-[#485059] border-[1.5px]"
            >
              <Image
                priority
                src={value.svgSource}
                width={69}
                height={69}
                alt="work value"
              />
              <p className="text-2xl font-semibold mt-3">{value.title}</p>
              <p className="text-lg text-gray-400 mt-3">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full my-32  overflow-hidden bg-secondary">
        <div className="pl-4 ml-4 text-xl sm:text-5xl font-normal flex justify-center items-center h-20 animate-scrollText">
          <p className="tracking-[.3em]">
            UNLEASH YOUR <span className="text-primary"> ANDROID </span>{' '}
            AWESOMENESS.
          </p>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Section_2, 'Section_2')
