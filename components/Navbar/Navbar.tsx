'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.png'
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
      <div className={`flex justify-between items-center`}>
        <Image
          src={logo}
          alt="logo"
          className={`w-1/5 md:w-1/12 transition-opacity duration-300 ${
            hideImage ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div
          className={`gap-2 px-4 py-1 hidden md:flex ${
            hideImage ? 'bg-tertiary rounded-3xl' : ''
          }`}
        >
          {navLinks.map((tab) => (
            <Link key={tab.label} href={tab.link}>
              <p className="hover:text-white text-gray-400 hover:underline hover:underline-offset-8 text-xl font-bold p-2">
                {tab.label}
              </p>
            </Link>
          ))}
        </div>

        <div
          className={`transition-opacity text-xl duration-300 hidden md:block ${
            hideButton ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Link href="#Section_6" title="Section_6">
            <button>GET YOUR APP BUILT</button>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button className="p-2">
            <i className="fa-solid fa-bars text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
