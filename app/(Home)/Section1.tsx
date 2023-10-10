import Button from '@/components/Button'

function Section_1() {
  return (
    <div className="min-h-screen">
      <div className="p-24">
        <div className="flex flex-col gap-4 text-9xl font-medium">
          <p>ANDROID CLUB</p>
          <p>VIT CHENNAI</p>
          <hr className="text-white border-2 border-white w-32" />
        </div>
        <div className="mt-6 flex items-center text-xl gap-16">
          <Button text="UPCOMING EVENTS" />
          <p>LEARN MORE</p>
        </div>
        <div className="flex flex-col gap-4 text-xl mt-6">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-linkedin" />
        </div>
      </div>
    </div>
  )
}

export default Section_1
