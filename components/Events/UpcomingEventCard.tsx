import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const UpcomingEventCard = (event: {
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
        <div className="flex gap-6">
          <div className="h-full bg-white w-2"></div>
          <p className="text-xl">{event.description.toUpperCase()}</p>
        </div>
        <Link href={event.url}>
          <button>REGISTER NOW</button>
        </Link>
      </div>
      <div className="flex justify-center w-1/2">
        <Image
          src={event.img}
          alt={event.name}
          className="rounded-lg border-2 border-white w-fit"
        />
      </div>
    </div>
  )
}

export default UpcomingEventCard
