import Button from "@/components/Button";
import Section2 from "@/app/Home/Section2";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-4">
        <Header />
        <div className="p-24" id="home">
          <div className="flex flex-col gap-4 text-7xl font-medium">
            <p>ANDROID CLUB</p>
            <p>VIT CHENNAI</p>
            <hr className="text-white border-2 border-white w-32" />
          </div>
          <div className="mt-6 flex items-center gap-4">
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
        <NavBar />
        <Section2 />
      <Footer />
    </div>
  );
}
