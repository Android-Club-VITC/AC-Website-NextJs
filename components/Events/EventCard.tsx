import React from 'react'
import Image from 'next/image'

const EventCard = (event: { img: any; name: string; description: string }) => {
  return (
    <div className="bg-secondary p-6 rounded-2xl md:w-1/3">
      <div className="flex justify-center h-80">
        <Image src={event.img} alt={event.name} />
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

export default EventCard
