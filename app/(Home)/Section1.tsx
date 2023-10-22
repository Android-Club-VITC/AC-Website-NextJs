'use client'
// we need to optimise this somehow use of sectionWrapper is not good...
// ~Shubham
import Link from 'next/link'
import { SectionWrapper } from '@/components/HOC'

function Section_1() {
  return (
    <section className="p-6 w-full md:p-24" id="#Section_1">
      <div className="flex flex-col animate-slideleftT2 gap-4 text-5xl md:text-9xl font-medium">
        <p>ANDROID CLUB</p>
        <p>VIT CHENNAI</p>
        <hr className="text-white border-2 border-white w-32" />
      </div>
      <div className="mt-6 flex animate-slideleftT3 items-center text-xl gap-16">
        <Link href="#Section_4">
          <button> UPCOMING EVENTS </button>
        </Link>
        <Link href="#Section_2">LEARN MORE</Link>
      </div>
      <div className="flex animate-slideleftT4 flex-col gap-4 text-2xl mt-6">
        <Link href="https://twitter.com/CampusAndroid/" target="_blank">
          <i className="hover:scale-110 transition duration-200 fa-brands fa-twitter" />
        </Link>
        <Link href="https://www.instagram.com/androidvitc/" target="_blank">
          <i className="hover:scale-110 transition duration-200 fa-brands fa-instagram" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/android-club-vitc/mycompany/?viewAsMember=true"
          target="_blank"
        >
          <i className="hover:scale-110 transition duration-200 fa-brands fa-linkedin" />
        </Link>
      </div>
    </section>
  )
}

export default SectionWrapper(Section_1, 'Section_1')
