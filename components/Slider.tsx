'use client'
import AliceCarousel from 'react-alice-carousel'
import Image from 'next/image'
import { values } from '@/constants/ourTeam'

const Slider = () => {
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 2 },
  }
  return (
    <div>
      <AliceCarousel responsive={responsive} autoPlay autoPlayInterval={2000}>
        {values.map((value) => (
          <div
            key={value.name}
            className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 rounded-xl bg-secondary my-10 mx-10 h-full md:h-72"
          >
            <div className="w-1/2">
              <Image
                src={value.image}
                alt="avatar"
                className="rounded-full object-cover bg-white h-44 w-44"
              ></Image>
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
    </div>
  )
}
export default Slider
