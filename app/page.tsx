import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiPieChart } from "react-icons/fi";
import { BsChatText } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { IoEllipse } from "react-icons/io5";
import Image from "next/image";
import logo from "../public/assets/vector.png";
import hero from "../public/assets/hero.png";

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
      <div className="bg-custom w-[1240px] h-[974px] absolute my-6 right-6 rounded-3xl">
        Hello
      </div>
    </main>
  );
}
