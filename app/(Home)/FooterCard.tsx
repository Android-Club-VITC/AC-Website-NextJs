'use client'

import { SectionWrapper } from '@/components/HOC'
import image from "@assets/card.svg"
import Image from 'next/image'
import Link from 'next/link'
import { socialMedia } from '@/constants/socielMedia'

function FooterCard() {
  return (
    <div className="p-24">
      <Image src={image} alt="image" className="w-full" />
      <div className="bg-secondary p-12 rounded-b-3xl">
        <div className="flex flex-col md:flex-row justify-around">
          <div className="flex flex-col gap-6 md:w-1/2">
            <p className="text-4xl">SUBSCRIBE TO OUR NEWSLETTER</p>
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="p-3 bg-tertiary"
            />
            <div>
              <button className="p-3 rounded-lg text-2xl px-12 bg-buttonShade hover:bg-primary text-secondary">
                SUBSCRIBE
              </button>
            </div>
            <div className="flex gap-2 text-2xl">
              <Link href={socialMedia.instagram}>
                <i className="fa-brands fa-instagram hover:scale-110 transition duration-200"></i>
              </Link>
              <Link href={socialMedia.twitter}>
                <i className="fa-brands fa-twitter hover:scale-110 transition duration-200"></i>
              </Link>
              <Link href={socialMedia.linkedin}>
                <i className="fa-brands fa-linkedin hover:scale-110 transition duration-200"></i>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col md:flex-row justify-around gap-4">
              <div>
                <p className="text-3xl">QUICK LINKS</p>
                <div className="flex flex-col gap-4 pt-2 text-xl">
                  <Link href="#Section_1">HOME</Link>
                  <Link href="#Section_2">ABOUT US</Link>
                  <Link href="#Section_3">OUR TEAM</Link>
                  <Link href="#Section_4">EVENT</Link>
                  <Link href="#Section_5">ARCHIVES</Link>
                </div>
              </div>
              <div>
                <p className="text-3xl">CONTACT US</p>
                <Link
                  href="mailto:androidclub@vit.ac.in"
                  className="text-xl pt-2"
                >
                  ANDROIDCLUB@VIT.AC.IN
                </Link>
              </div>
            </div>
            <hr className="border-tertiary w-full m-6" />
          </div>
        </div>
        {/* <div className="flex gap-2 text-2xl">
          <Link href={socialMedia.instagram}>
            <i className="fa-brands fa-instagram hover:scale-110 transition duration-200"></i>
          </Link>
          <Link href={socialMedia.twitter}>
            <i className="fa-brands fa-twitter hover:scale-110 transition duration-200"></i>
          </Link>
          <Link href={socialMedia.linkedin}>
            <i className="fa-brands fa-linkedin hover:scale-110 transition duration-200"></i>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default SectionWrapper(FooterCard, 'FooterCard')
