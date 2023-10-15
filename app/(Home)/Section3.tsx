'use client'
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Image from 'next/image'
import { values } from '@/constants/ourTeam'
import { SectionWrapper } from '@/components/HOC'

function Section_3() {
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 2 },
  }

  return (
    <section className="w-full md:p-24" id="#Section_3">
      <h1 className="text-xl md:text-8xl text-center my-6">Our Team</h1>
      <AliceCarousel
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls
      >
        {values.map((value) => (
          <div
            key={value.name}
            className="flex flex-col md:flex-row items-center justify-between gap-10 p-5 rounded-xl bg-secondary my-10 mx-10"
          >
            <div className="md:w-1/2">
              <Image
                src={value.image}
                alt="avatar"
                className="rounded-[200%] bg-white w-full h-64"
              />
            </div>
            <div className="px-4 py-2 border-l-2 border-gray-500 w-full  md:w-1/2">
              <p className="name text-green-600 text-2xl">{value.name}</p>
              <p className="designation text-green-500">{value.role}</p>
              <p className="description mt-4 text-gray-300">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </AliceCarousel>
    </section>
  )
}

export default SectionWrapper(Section_3, 'Section_3')
