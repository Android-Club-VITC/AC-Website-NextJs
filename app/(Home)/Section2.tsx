import Image from "next/image";
import React from "react";
import scrollIcon from "../../assets/about/scroll.svg";
import monitorIcon from "../../assets/about/monitor1.svg";
import questionIcon from "../../assets/about/question.svg";

type CoreValueType = {
    svgSource: any;
    title: string;
    description: string;
};
const Section2 = () => {
    const values: CoreValueType[] = [
        {
            svgSource: scrollIcon,
            title: "We Are Android Enthusiasts",
            description: "We're a community of Android enthusiasts passionate about app development.", 
        },
        {
            svgSource: monitorIcon,
            title: "Weekly Learning Sessions",
            description: "Join us for weekly sessions where we teach Android app development.", 
        },
        {
            svgSource: questionIcon,
            title: "Doubt Resolution",
            description: "We're here to help you with any questions or challenges you face along the way.", 
        }
    ];
    return (
        <section id="about">
            <h1 className='px-6 font-normal text-3xl sm:text-6xl tracking-tight '>// OUR CORE WORK VALUES</h1>
            <div className="px-6 mt-12 flex gap-4 justify-center  flex-col md:flex-row">
                {values.map((value) => {
                    return (
                        <div className=" bg-[#121316] py-[70px] px-[60px] opacity-75
                         rounded border-[#485059] border-[1.5px]">
                            <Image priority src={value.svgSource} width={69} height={69} alt="work value" />
                            <p className="font-bold text-2xl mt-3 ">{value.title}</p>
                            <p className=" text-xl font-medium text-[#BCBCBC] mt-5">{value.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className=" pl-4 ml-4 mt-32 text-xl sm:text-5xl font-normal   flex justify-center items-center h-20 bg-[#121316]">
            <p className="tracking-widest">UNLEASH YOUR  <span className="text-[#55C106] "> ANDROID </span>  AWESOMENESS</p>            </div>
        </section>
    );
};

export default Section2;
