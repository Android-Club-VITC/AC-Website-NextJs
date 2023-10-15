'use client'

import React from 'react'
import { SectionWrapper } from '@/components/HOC'
import { events, upcomingEvent } from '@/constants/events'
import UpcomingEventCard from '@/components/Events/UpcomingEventCard'
import EventCard from '@/components/Events/EventCard'

const Section_4 = () => {
  return (
    <>
      <section className="p-24">
        <h1 className="px-6 mt-32 font-normal text-3xl sm:text-6xl tracking-wide ">
          // UPCOMING EVENTS
        </h1>
        <div className="pt-12">
          <UpcomingEventCard
            name={upcomingEvent.name}
            description={upcomingEvent.description}
            img={upcomingEvent.img}
            url={upcomingEvent.url}
          />
        </div>
        <h1 className="px-6 mt-32 font-normal text-3xl sm:text-6xl tracking-wide ">
          // CHECKOUT OUR PREVIOUS EVENTS
        </h1>
        <div className="mt-12 flex md:flex-row flex-col gap-6 justify-around">
          {events.map((event) => (
            <EventCard key={event.name} {...event} />
          ))}
        </div>
      </section>
    </>
  )
}

export default SectionWrapper(Section_4, 'Section_4')
