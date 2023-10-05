export default function NavBar() {
  const tabs: string[] = [
    "Home",
    "About Us",
    "OUR TEAM",
    "EVENTS",
    "ARCHIVES",
    "CONTACT US",
  ];
  return (
    <div className="flex justify-center">
      <div className="flex justify-around items-center bg-transparent bg-gray-800 p-1 px-6 w-fit rounded-3xl">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <p className="hover:text-white text-gray-500 hover:underline hover:underline-offset-8 font-bold p-2">
              {tab}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
