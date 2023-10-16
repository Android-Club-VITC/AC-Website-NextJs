'use client'
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import { SectionWrapper } from '@/components/HOC'
import ResponsiveCarousel from '@/components/OurTeam/TeamSlider'

function Section_3() {
  return (
    <section className="w-full md:p-24" id="#Section_3">
      <h1 className="px-6 mt-32 font-normal text-3xl sm:text-6xl tracking-wide ">
        // OUR TEAM
      </h1>
      <ResponsiveCarousel />
    </section>
  )
}

export default SectionWrapper(Section_3, 'Section_3')
