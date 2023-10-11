'use client'
// we need to optimise this somehow use of sectionWrapper is not good...
// ~Shubham
import Button from '@/components/Button'
import { SectionWrapper } from '@/components/HOC'

function Section_1() {
  return (
    <div className="p-24">
      <div className="flex flex-col animate-slideleftT2 gap-4 text-9xl font-medium">
        <p>ANDROID CLUB</p>
        <p>VIT CHENNAI</p>
        <hr className="text-white border-2 border-white w-32" />
      </div>
      <div className="mt-6 flex animate-slideleftT3 items-center text-xl gap-16">
        <Button text="UPCOMING EVENTS" />
        <p>LEARN MORE</p>
      </div>
      <div className="flex animate-slideleftT4 flex-col gap-4 text-xl mt-6">
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-linkedin" />
      </div>
    </div>
  )
}

export default SectionWrapper(Section_1, 'Section_1')
