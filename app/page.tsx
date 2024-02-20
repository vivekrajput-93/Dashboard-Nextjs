import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoEllipse } from "react-icons/io5";
import Image from "next/image";
import logo from "../public/assets/vector.png";
import hero from "../public/assets/hero.png";
import full from "../public/assets/full.png";
import half from "../public/assets/half.png";
import one from "../public/assets/mod-one.png";
import two from "../public/assets/mod-two.png";
import three from "../public/assets/mod-three.png";
import { IoMicOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="w-[1440px] h-[1024px] flex justify-between relative my-8 rounded-3xl mx-auto bg-gray-900">
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
        <div className="border col-span-2 w-[760px] h-[901px] my-auto">
          Row 1
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
                <input placeholder="Type your text..." className="border-none outline-none text-[12px] bg-logo" />
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
