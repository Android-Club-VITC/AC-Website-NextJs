'use client'
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css'
import { SectionWrapper } from '@/components/HOC'
import Slider from '@/components/Slider'

function Section_3() {
  return (
    <section className="w-full md:p-24" id="#Section_3">
      <h1 className="text-xl md:text-8xl text-center my-6">Our Team</h1>
      <Slider />
    </section>
  )
}

export default SectionWrapper(Section_3, 'Section_3')
