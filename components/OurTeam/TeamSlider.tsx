import { values } from '@/constants/ourTeam'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'

export default function ResponsiveCarousel() {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg overflow-hidden p-4 shadow-md">
      <Carousel
        centerMode
        centerSlidePercentage={50}
        showArrows={true}
        autoPlay={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        className="w-full"
      >
        {values.map((value) => (
          <div
            key={value.name}
            className="flex flex-col md:flex-row items-center justify-center gap-10 p-5 rounded-xl bg-secondary m-10 h-full md:h-72"
          >
            <div className="w-1/3">
              <Image
                src={value.image}
                alt="avatar"
                className="rounded-full object-cover bg-white h-44 w-44"
              ></Image>
            </div>
            <div className="px-4 py-2 border-l-2 border-gray-500 w-full  md:w-2/3">
              <p className="name text-primary text-3xl">{value.name}</p>
              <p className="designation text-textShade2 text-xl">
                {value.role}
              </p>
              <p className="description mt-4 text-gray-300">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}