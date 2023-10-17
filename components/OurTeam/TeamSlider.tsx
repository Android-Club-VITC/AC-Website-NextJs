'use client'
import { values } from '@/constants/ourTeam'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ResponsiveCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(2)
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1)
      } else {
        setSlidesToShow(2)
      }
    }
    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => {
      window.removeEventListener('resize', updateSlidesToShow)
    }
  }, [])

  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div>
      <Slider {...settings} className="slick-container">
        {values.map((value) => (
          <div key={value.name} className="slick-slide">
            <div className="flex flex-col md:flex-row items-center justify-center p-5 rounded-xl bg-secondary m-10 h-full md:h-72">
              <div className="w-1/3">
                <Image
                  src={value.image}
                  alt="avatar"
                  className="rounded-full object-cover bg-white h-44 w-44"
                />
              </div>
              <div className="px-4 py-2 border-l-2 border-gray-500 w-full md:w-2/3">
                <p className="name text-primary text-3xl">{value.name}</p>
                <p className="designation text-textShade2 text-xl">
                  {value.role}
                </p>
                <p className="description mt-4 text-gray-300">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ResponsiveCarousel
