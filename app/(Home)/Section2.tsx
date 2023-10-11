import Image from 'next/image'
import React from 'react'
import { values } from '@/constants/aboutUs'

const Section_2 = () => {
  return (
    <section id="about">
      <h1 className="px-6 font-normal text-3xl sm:text-6xl tracking-wide ">
        // OUR CORE WORK VALUES
      </h1>
      <div className="px-6 mt-12 flex gap-5 justify-center  flex-col md:flex-row">
        {values.map((value, index) => (
          <div key={index} className="w-1/3 bg-[#121316] p-12 rounded border-[#485059] border-[1.5px]">
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
      <div className="w-full my-32  overflow-hidden bg-[#121316]">
        <div className="pl-4 ml-4 text-xl sm:text-5xl font-normal flex justify-center items-center h-20 animate-scrollText">
          <p className='tracking-[.3em]'>
            UNLEASH YOUR <span className="text-[#55C106]"> ANDROID </span> AWESOMENESS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section_2
