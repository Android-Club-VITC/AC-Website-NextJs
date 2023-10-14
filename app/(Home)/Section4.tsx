'use client'

import Image from 'next/image'
import React from 'react'
import { SectionWrapper } from '@/components/HOC'
import { events, upcomingEvent } from '@/constants/events'
import Button from '@/components/Button'

const Section_4 = () => {
  const eventCard = (event: {
    img: any
    name: string
    description: string
  }) => {
    return (
      <div className="bg-secondary p-6 rounded-2xl md:w-1/3">
        <div className="flex justify-center h-80" >
          <Image src={event.img} alt={event.name}  />
        </div>
        <div className="pt-4">
          <p className="font-bold text-primary text-3xl">
            {event.name.toUpperCase()}
          </p>
          <p className="text-xl">{event.description.toUpperCase()}</p>
        </div>
      </div>
    )
  }

  const upcomingEventCard = (event: {
    img: any
    name: string
    description: string
    url: string
  }) => {
    return (
      <div className="bg-secondary p-6 rounded-2xl flex flex-col-reverse md:flex-row justify-between gap-6">
        <div className="w-1/2 flex flex-col gap-8">
          <p className="font-bold text-primary text-7xl">
            {event.name.toUpperCase()}
          </p>
          <div className='flex gap-6'>
            <div className="h-full bg-white w-2"></div>
          <p className="text-xl">{event.description.toUpperCase()}</p>
          </div>
          <Button class='text-xl' text="REGISTER NOW" url={event.url} />
        </div>
        <div className="flex justify-center w-1/2">
          <Image src={event.img} alt={event.name} className='rounded-lg border-2 border-white w-fit' />
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="p-24">
        <h1 className="px-6 mt-32 font-normal text-3xl sm:text-6xl tracking-wide ">
          // UPCOMING EVENTS
        </h1>
        <div className='pt-12'>{upcomingEventCard(upcomingEvent)}</div>
        <h1 className="px-6 mt-32 font-normal text-3xl sm:text-6xl tracking-wide ">
          // CHECKOUT OUR PREVIOUS EVENTS
        </h1>
        <div className="mt-12 flex md:flex-row flex-col gap-6 justify-around">
          {events.map((event: any) => eventCard(event))}
        </div>
      </section>
    </>
  )
}

export default SectionWrapper(Section_4, 'Section_4')
