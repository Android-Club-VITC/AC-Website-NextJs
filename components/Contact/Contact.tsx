'use client'

import React, { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/HOC'

const Contact: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //Add form submission logic here
  }

  return (
    <>
      <div className="w-full lg:w-1/2 py-16  px-12">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-8 font-semibold sm:font-medium text-center sm:text-start text-primary">
          {'  //HAVE AN IDEA?'}
        </h1>
        <h2 className="text-2sm md:text-xl lg:text-2xl mb-12 font-bold sm:font-semibold sm:text-start xl:text-start text-center">
          GET YOUR IDEA TRANSFORMED INTO APP
        </h2>
        {/* <hr className='border-2 w-full sm:w-11/12 flex mb-4'></hr> */}

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label
              htmlFor="name"
              className="block text-sm md:text-xl lg:text-2xl font-medium space-y-8 mb-2 "
            >
              NAME
            </label>
            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg bg-transparent focus:outline-primary border-gray-400 p-auto px-3 w-full lg:w-11/12 h-12"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="email"
              className="block text-sm md:text-xl lg:text-2xl font-medium space-y-8 mb-2"
            >
              EMAIL
            </label>
            <input
              type="text"
              placeholder="Email"
              className="border rounded-lg bg-transparent focus:outline-primary border-gray-400 p-auto px-3 w-full lg:w-11/12 h-12"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="phone"
              className="block text-sm md:text-xl lg:text-2xl font-medium space-y-8 mb-2"
            >
              MOBILE NUMBER
            </label>
            <input
              type="text"
              placeholder="+91"
              className="border rounded-lg bg-transparent focus:outline-primary border-gray-400 p-auto px-3 w-full lg:w-11/12 h-12"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="phone"
              className="block font-medium space-y-8 mb-2 text-sm md:text-xl lg:text-2xl "
            >
              PROJECT DETAILS
            </label>
            <input
              type="idea"
              placeholder="Your Idea"
              className="border rounded-lg bg-transparent focus:outline-primary border-gray-400 w-full px-3 pb-16 lg:w-11/12 h-24"
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="phone"
              className="block font-medium space-y-8 mb-2 text-sm md:text-xl lg:text-2xl "
            >
              APPROX BUDGET
            </label>
            <input
              type="budget"
              placeholder="Budget(Optional)"
              className="border rounded-lg bg-transparent focus:outline-primary border-gray-400 p-auto px-3 w-full lg:w-11/12 h-12"
            />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="p-3 rounded-lg text-sm md:text-xl border-none py-4 lg:text-2xl px-12 mt-2 bg-primary hover:bg-buttonShade text-secondary w-full lg:w-11/12"
            >
              GET IT DONE
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default Contact
