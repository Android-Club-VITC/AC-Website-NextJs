import Image from "next/image";
import logo from "../assets/logo.jpg";
import Button from "./Button";

export default function Header() {
  const tabs: string[] = [
    "Home",
    "About Us",
    "OUR TEAM",
    "EVENTS",
    "ARCHIVES",
    "CONTACT US",
  ];
  return (
    <div className="flex justify-around items-center">
      <Image src={logo} alt="logo" className="w-1/12" />
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <p className="hover:text-white text-gray-500 hover:underline hover:underline-offset-8 font-bold p-2">
            {tab}
          </p>
        ))}
      </div>
      <Button text="Get your app built" />
    </div>
  );
}
