'use client'
// we need to optimise this somehow use of sectionWrapper is not good...
// ~Shubham
import Button from '@/components/Button'
import { SectionWrapper } from '@/components/HOC'

function Section_1() {
  return (
    <div className="">
      <div className="flex flex-col animate-slideleftT2 gap-4 text-9xl font-medium">
        <p>ANDROID CLUB</p>
        <p>VIT CHENNAI</p>
        <hr className="text-white border-2 border-white w-32" />
      </div>
      <div className="mt-6 flex animate-slideleftT3 items-center text-xl gap-16">
        <Button url="#Section_4" text="UPCOMING EVENTS" />
        <a href='#Section_2'>LEARN MORE</a>
      </div>
      <div className="flex animate-slideleftT4 flex-col gap-4 text-2xl mt-6">
        <a href="https://twitter.com/CampusAndroid/" target="_blank">
          <i className="hover:scale-110 transition duration-200 fa-brands fa-twitter" />
        </a>
        <a href="https://www.instagram.com/androidvitc/" target="_blank">
          <i className="hover:scale-110 transition duration-200 fa-brands fa-instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/android-club-vitc/mycompany/?viewAsMember=true"
          target="_blank"
        >
          <i className="hover:scale-110 transition duration-200 fa-brands fa-linkedin" />
        </a>
      </div>
    </div>
  )
}

export default SectionWrapper(Section_1, 'Section_1')
