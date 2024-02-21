import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoEllipse } from "react-icons/io5";
import blur from "../public/assets/blur.png";
import halfOnce from "../public/assets/half-once.png";
import fullOnce from "../public/assets/full-once.png";
import Image from "next/image";
import logo from "../public/assets/vector.png";
import hero from "../public/assets/hero.png";
import arrow from "../public/assets/arrow.png";
import full from "../public/assets/full.png";
import half from "../public/assets/half.png";
import one from "../public/assets/mod-one.png";
import two from "../public/assets/mod-two.png";
import three from "../public/assets/mod-three.png";
import { IoMicOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdWavingHand } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiClockwork } from "react-icons/gi";
import fulls from "../public/assets/full-returns.png";
import halfs from "../public/assets/half-returns.png";
import four from "../public/assets/four.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import perone from "../public/assets/persone.png";
import pertwo from "../public/assets/pertwo.png";
import perthree from "../public/assets/perthree.png";
import { FaBell } from "react-icons/fa";
import dotted from "../public/assets/dotted.png";

export default function Home() {
  return (
     <main className="w-full md:w-[1440px] h-auto md:h-[1024px] flex flex-col md:flex-row justify-between relative my-8 rounded-3xl mx-auto bg-gray-900">
      <div className="w-[60px] h-[940px] my-auto flex ml-14">
        <div className="flex flex-col gap-y-20 mt-5">
          <div className="relative flex justify-center items-center">
            <Image
              src={logo}
              alt="logo"
              className="w-[40px] h-[40px] object-contain"
            />
            <IoEllipse className="text-white absolute top-4" />
          </div>
          <div className="w-full h-[400px] flex flex-col text-white justify-center items-center gap-y-12">
            <div className="w-[60px] h-[60px] bg-logo flex justify-center items-center rounded-2xl cursor-pointer">
              <AiOutlineHome size={24} />
            </div>
            <IoDocumentTextOutline size={24} className="cursor-pointer" />
            <FiPieChart size={24} className="cursor-pointer" />
            <BsChatText size={24} className="cursor-pointer" />
            <IoSettingsOutline size={24} className="cursor-pointer" />
          </div>
          <div className="mt-44 text-white flex flex-col items-center h-full justify-evenly">
            <Image
              src={hero}
              width={44}
              height={44}
              alt="hero-img"
              className="rounded-full cursor-pointer"
            />
            <IoMdLogOut size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-custom w-[1240px] text-white grid grid-cols-3 gap-x-0 h-[974px] absolute my-6 right-6 rounded-3xl">
        <div className=" col-span-2 w-[760px] h-[901px] my-auto">
          <div className="  h-[76px] ml-5 flex justify-between ">
            <div className="relative left-8">
              <p className="text-[28px] font-light">Hello,</p>
              <p className="flex justify-center items-center gap-x-2 text-[28px] font-semibold">
                Dr. Colter!
                <MdWavingHand
                  size={20}
                  className=""
                  style={{ color: "#E6D78C" }}
                />
              </p>
            </div>
            <div className="flex w-[412px] h-[60px] ml-24 bg-logo rounded-3xl pl-4 items-center gap-x-2 ">
              <CiSearch size={24} />
              <input
                placeholder="Search"
                className="border-none outline-none bg-logo"
              />
            </div>
            <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-3xl  bg-ring">
              <div className="w-2.5 h-2.5 relative left-5 bottom-2 bg-red-500 rounded-full"></div>
              <FaRegBell size={20} />
            </div>
          </div>
          <div className="flex ml-12 gap-x-[30px] mt-6">
            <div className="w-[290px] h-[325px] flex flex-col gap-y-[25px] ">
              <div className="h-[150px]  flex  rounded-3xl">
                <div className="w-[177px] rounded-l-3xl flex flex-col pl-6 gap-y-3 justify-center bg-patient">
                  <h1 className="text-[32px] font-bold">42</h1>
                  <div>
                    <p className="text-[16px] font-bold">Patient Visited</p>
                    <p className="text-[12px] text-gray-400">This month</p>
                  </div>
                </div>
                <div className="w-[113px] flex justify-center items-center rounded-r-3xl bg-logo">
                  <div className="w-[50px] h-[75px] ">
                    <div className="h-[25px] rounded-t-full bg-semi"></div>
                    <div className="h-[50px] rounded-b-full flex flex-col justify-center items-center bg-ring">
                      <FaArrowTrendUp size={16} />
                      <p className="text-[14px] font-bold">70%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[150px] rounded-3xl bg-patient">
                <div className="flex justify-start mt-4 items-center gap-x-3">
                  <div className="w-[30px] h-[22px] rounded-2xl flex justify-center items-center text-black  ml-4 bg-ring">
                    <FaArrowRightLong size={12} />
                  </div>
                  <p className="text-[16px] font-bold">Upcoming Events</p>
                </div>
                <div className="flex mt-2 gap-x-4">
                  <div className="w-[79px] h-[79px] ml-4 mt-3 ">
                    <div className="relatvive">
                      <Image
                        src={fulls}
                        alt="person"
                        className="w-[79px] h-[79px] absolute"
                      />
                      <Image
                        src={halfs}
                        alt="person"
                        className="w-[79px] h-[79px] absolute"
                      />
                    </div>
                    <div className="w-[56px] h-[56px] rounded-full relative top-[11px] left-[11px] bg-one">
                      <Image
                        src={four}
                        alt="person"
                        className="w-[45px] h-[45px] rounded-full relative top-[12px] left-1"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-bold text-[20px]">Aliza Shah</p>
                      <div className="flex gap-x-2">
                        <GiClockwork size={12} />
                        <p className="text-xs text-gray-400">08:00-09:00 am</p>
                      </div>
                    </div>
                    <div className="w-[125px] h-[25px] flex justify-center items-center mt-5 rounded-2xl pt-1 bg-logo">
                      <p className="text-xs">Visited 7 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[385px] h-[325px] rounded-3xl flex flex-col bg-patient px-5 py-5 ">
              <div className="flex w-full justify-between ">
                <div>
                  <p className="text-[24px] font-bold">Statistics</p>
                  <p className="text-xs text-gray-400">November 2023</p>
                </div>
                <div className="flex w-[85px] h-[35px] border justify-center items-center border-blue-500 rounded-2xl">
                  <p className="text-[12px] font-semibold"> Weekly </p>
                  <MdKeyboardArrowDown size={16} />
                </div>
              </div>
              <div className="w-[305px] h-[155px]  mt-16 ml-5">
                <Image
                  src={blur}
                  alt="blur"
                  className="w-[305px] h-[155px] rounded-3xl"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 ml-12">
            <div className="flex justify-between">
              <p className="text-2xl font-bold">Active Patients</p>
              <p className="mr-24 text-2xl font-bold">Upcoming Events</p>
            </div>
            <div className="flex mt-7 gap-x-5">
              <div className="w-[385px] flex gap-x-[80px] h-[382px] bg-patient rounded-3xl">
                <ul className="flex flex-col justify-evenly ml-6 w-[105px] text-xs gap-4 relative  text-gray-400 ">
                  <li >08:00 am</li>
                  <li>09:00 am</li>
                  <li>10:00 am</li>
                  <li>11:00 am</li>
                  <li>12:00 am</li>
                </ul>
                <div className="flex flex-col justify-evenly">
                  <div className="">
                  <div className="dotted-line ">
                    <Image src={dotted} alt="dot" className="relative top-8 right-0 w-[200px]  " />
                    </div>
                    <div className="w-[190px] z-30 flex flex-col h-[50px] bg-oneth rounded-2xl relative right-12">
                      <div className="flex gap-4 justify-center relative top-1 items-center">
                        <Image
                          src={pertwo}
                          alt="person"
                          className="w-[36px] h-[36px] rounded-full object-cover"
                        />
                        <div>
                          <p className="text-black font-bold">Max Jaxon</p>
                          <div className="flex gap-x-2 text-black">
                            <GiClockwork size={12} />
                            <p className="text-xs text-black">08:00-09:00 am</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dotted-line ">
                    <Image src={dotted} alt="dot" className="relative bottom-8 right-20 w-[200px]  " />
                    </div>
                  </div>
                  <div className="">
                    <div className="w-[190px] z-30 flex flex-col h-[50px] bg-ten rounded-2xl relative left-1">
                      <div className="flex gap-4 justify-center relative top-1 items-center">
                        <Image
                          src={perthree}
                          alt="person"
                          className="w-[36px] h-[36px] rounded-full object-cover"
                        />
                        <div>
                          <p className="text-black font-bold">Maria khan</p>
                          <div className="flex gap-x-2 text-black">
                            <GiClockwork size={12} />
                            <p className="text-xs text-black">09:00-10:00 am</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dotted-line ">
                    <Image src={dotted} alt="dot" className="relative bottom-8 right-16 w-[200px]  " />
                    </div>
                  </div>
                  <div className="">
                    <div className="dotted-line ">
                    <Image src={dotted} alt="dot" className="relative top-6 w-[200px]  " />
                    </div>
                    <div className="w-[190px] z-30 flex flex-col h-[50px] bg-eleven rounded-2xl relative bottom-2 right-16">
                      <div className="flex gap-4 justify-center relative top-1 items-center">
                        <Image
                          src={perone}
                          alt="person"
                          className="w-[36px] h-[36px] rounded-full object-cover"
                        />
                        <div>
                          <p className="text-black font-bold">Brick Zon</p>
                          <div className="flex gap-x-2 text-black">
                            <GiClockwork size={12} />
                            <p className="text-xs text-black">10:00-11:00 am</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="z-30">
                   <div className="w-[105px] h-[29px] z-30 bg-hero-back rounded-2xl text-xs flex justify-center items-center">Break Time</div>
                  </div>
                  
                  <div className="ml-6 mb-3">
                  <div className="dotted-line ">
                    <Image src={dotted} alt="dot" className="relative top-11 right-4 w-[200px]  " />
                    </div>
                    <div className="w-[190px] z-30 flex flex-col h-[50px] bg-mod rounded-2xl relative right-10 top-3">
                      <div className="flex gap-4 justify-center relative top-1 items-center">
                        <Image
                          src={two}
                          alt="person"
                          className="w-[36px] h-[36px] rounded-full object-cover"
                        />
                        <div>
                          <p className="text-black font-bold">Alexa Max</p>
                          <div className="flex gap-x-2 text-black">
                            <GiClockwork size={12} />
                            <p className="text-xs text-black">12:00-15:00 am</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dotted-line ">
                    <Image src={dotted} alt="dot" className="relative bottom-4 right-20 w-[200px]  " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 ml-3 ">
                <div className="w-[290px] h-[179px] bg-patient rounded-3xl">
                  <div className="flex justify-between mt-4 px-5">
                    <div>
                      <p className="text-[20px] font-bold">Team Meeting</p>
                      <div className="flex gap-2 items-center">
                        <GiClockwork size={16} />
                        <p className="text-xs text-gray-400">05:00-06:00</p>
                      </div>
                    </div>
                    <div className="w-[60px] h-[60px] bg-logo flex justify-center items-center rounded-3xl">
                      <FaBell className="text-blue-500" size={24} />
                    </div>
                  </div>
                  <div className="flex justify-between mr-5 mt-8">
                    <div className="flex ml-5">
                      <Image
                        src={perone}
                        alt="person"
                        className="w-9 h-9 rounded-full"
                      />
                      <Image
                        src={pertwo}
                        alt="person"
                        className="w-9 h-9 rounded-full relative right-2"
                      />
                      <Image
                        src={perthree}
                        alt="person"
                        className="w-9 h-9 rounded-full relative right-4"
                      />
                      <div className="w-9 h-9 text-black relative right-6 flex justify-center items-center font-bold bg-slate-100 rounded-full">
                        +4
                      </div>
                    </div>
                    <div className="flex justify-center items-center bg-ring w-[54px] h-[40px] rounded-2xl text-black">
                      <FaArrowRightLong size={20} />
                    </div>
                  </div>
                </div>
                <div className="w-[290px] h-[179px]  bg-patient rounded-3xl">
                  <div className="flex justify-between items-center">
                    <div className="mt-5 pl-5 ">
                      <h2 className="text-xs mb-1 text-gray-400">
                        Consultation
                      </h2>
                      <h2 className="text-[24px] font-bold">82/100</h2>
                    </div>
                    <div className="flex gap-1 mb-4 mr-5 ">
                      <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                      <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                      <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="top-12 mr-28 flex justify-around relative">
                    <div className="w-[101px] h-[34px] bg-logo flex justify-center items-center gap-3 rounded-2xl ">
                      <p>82%</p>
                      <FaArrowTrendUp size={20} />
                    </div>
                    <div className="relatvie">
                      <Image
                        src={fullOnce}
                        alt="person"
                        className="w-[80px] h-[80px] absolute bottom-0 left-44"
                      />
                      <Image
                        src={halfOnce}
                        alt="person"
                        className="w-[80px] h-[80px] absolute bottom-0 left-44"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-1 w-[400px] h-[901px] my-auto relative right-6 bg-hero-back rounded-3xl">
          <div className="flex flex-col">
            <div className="h-[200px]">
              <Image
                src={full}
                alt="full"
                className="w-[150px] h-[150px] mx-auto relative top-[51px] z-10 "
              />
              <Image
                src={hero}
                alt="hero"
                className="w-[110px] h-[110px] rounded-full mx-auto relative bottom-[78px] "
              />
              <Image
                src={half}
                alt="half"
                className="w-[150px] h-[150px] relative mx-auto bottom-52"
              />
            </div>
            <div>
              <h3 className="text-[24px] font-medium text-center mt-3">
                Aliam Colter
              </h3>
              <p className="text-center text-slate-300">Physician</p>
            </div>
          </div>
          <div className="w-[350px] h-[80px] flex justify-between items-center rounded-[30px] mx-auto mt-5 bg-people">
            <h2 className="text-lg ml-5">Active Patients</h2>
            <div className="flex mr-2">
              <Image
                src={one}
                alt="person"
                className="w-[36px] h-[36px] object-cover rounded-full"
              />
              <Image
                src={two}
                alt="person"
                className="w-[36px] h-[36px] object-cover rounded-full relative right-2"
              />
              <Image
                src={three}
                alt="person"
                className="w-[36px] h-[36px] object-cover rounded-full relative right-4"
              />
              <span className="w-[36px] h-[36px] bg-span text-black text-sm font-bold rounded-full relative right-6 flex justify-center items-center">
                8+
              </span>
            </div>
          </div>
          <div className="w-[350px] h-[464px] mt-6 rounded-3xl bg-chat mx-auto">
            <div className="flex justify-between h-20 items-center">
              <div className="flex justify-center items-center gap-x-4 ml-3">
                <Image src={two} className="w-12 rounded-full" alt="person" />
                <div>
                  <p className="text-[16px]">Alexa Max</p>
                  <p className="text-[12px] text-gray-400">Active 5 min ago</p>
                </div>
              </div>
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full text-[#409bee] mr-3 bg-phone">
                <FaPhoneAlt />
              </div>
            </div>
            <hr className="w-[300px] mx-auto border border-slate-500" />
            <div>
              <p className="w-[120px] h-[34px] mt-3 bg-gray-100 text-black text-[12px] flex pl-4 ml-20 mb-4 rounded-2xl font-semibold items-center">
                Hi, Docter.
              </p>
              <div className="flex items-center gap-x-3 ml-5">
                <Image src={two} className="w-12 rounded-full" alt="person" />
                <p className="text-[12px] w-[166px] h-[60px] text-black flex justify-center items-center p-5 rounded-2xl bg-gray-100">
                  I got knee jerk. What should i do right now?
                </p>
              </div>
              <p className="ml-20 mt-2 text-[12px] text-gray-500">
                Tue 02:32pm
              </p>
            </div>
            <div>
              <div className="flex gap-x-3 justify-end items-center mr-5">
                <p className="w-[120px] h-[34px] mt-3 bg-hero text-black text-[12px] flex pl-4 mb-4 rounded-2xl font-semibold items-center">
                  Hi, Alexa.
                </p>
                <Image
                  src={hero}
                  alt="hero"
                  className="w-[46px] h-[46px] rounded-full"
                />
              </div>
              <p className="text-[12px] w-[166px] h-[60px] text-black flex justify-center ml-28 items-center p-5 rounded-2xl bg-hero">
                I got knee jerk. What should i do right now?
              </p>
            </div>
            <p className="ml-52 mt-2 text-[12px] text-gray-500">Tue 02:32pm</p>
            <div className="w-[330px] h-[70px] mt-2 flex justify-between items-center bg-logo rounded-[30px] mx-auto">
              <div className="flex justify-center items-center h-full ml-4 gap-x-3">
                <IoMicOutline size={24} />
                <input
                  placeholder="Type your text..."
                  className="border-none outline-none text-[12px] bg-logo"
                />
              </div>
              <div className="w-[60px] h-[60px] flex justify-center items-center bg-ring rounded-3xl mr-2">
                <IoPaperPlaneOutline size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
