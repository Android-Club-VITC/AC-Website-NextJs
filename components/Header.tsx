'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import Button from './Button'
import { navLinks } from '@/constants/navLinks'

export default function Header() {
  const [hideImage, setHideImage] = useState(false)
  const [hideButton, setHideButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100
      if (window.scrollY > scrollThreshold) {
        setHideImage(true)
        setHideButton(true)
      } else {
        setHideImage(false)
        setHideButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={`sticky top-0 z-10 p-1 px-6 w-full`}>
      <div className={`flex justify-around items-center`}>
        <Image
          src={logo}
          alt="logo"
          className={`w-1/12 transition-opacity duration-300 ${
            hideImage ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`flex gap-2 px-4 py-1 ${
            hideImage ? 'bg-tertiary rounded-3xl' : ''
          }`}
        >
          {navLinks.map((tab) => (
            <a key={tab.label} href={tab.link}>
              <p className="hover:text-white text-gray-400 hover:underline hover:underline-offset-8 text-xl font-bold p-2">
                {tab.label}
              </p>
            </a>
          ))}
        </div>

        <div
          className={`transition-opacity text-xl duration-300 ${
            hideButton ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <a href="#Section_6" title="Section_6">
            <Button url="#Section_6" text="GET YOUR APP BUILT" />
          </a>
        </div>
      </div>
    </div>
  )
}
