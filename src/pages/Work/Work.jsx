import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import cover from "../../assets/Cover.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Work = () => {
  return (
    <>
      <div className="bg-[#F4F6FC] ">
        <div className="container mx-auto">
          <div className="w-[733px] mx-auto flex flex-col gap-[24px] justify-center items-center ">
            <p className="opacity-70 mt-[96px] ">What we created</p>
            <h3 className="text-[48px] font-bold">Our Work Portfolio</h3>
            <p className="text-center opacity-70 mt-[24px]">
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
            <div className="flex gap-7 mb-[96px]">
              <FaFacebook />
              <FaTwitter />
              <LuInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center">
        <ul className="flex gap-8 opacity-70 mt-[96px]">
          <li className="text-[#2405F2]">All</li>
          <li>UI Design</li>
          <li>Webflow Design</li>
          <li>Figma Design</li>
        </ul>
      </div>
      <div className="container mx-auto mt-[48px] grid grid-cols-2 gap-16 mb-14 max-[700px]:grid-cols-1">
        <div className="w-[623px] h-[576px] ">
          <div><img src={cover} alt="" className="w-full"/></div>
          <div>
            <h3 className="text-[38px] font-bold mt-[24px]">Template 1</h3>
            <p className="opacity-70 mt-[12px]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <div className="flex items-center gap-4 mt-[36px]">View Portfolio <FaArrowRightLong /></div>
          </div>
        </div>
        <div className="w-[623px] h-[576px]">
          <div><img src={cover} alt="" className="w-full"/></div>
          <div>
            <h3 className="text-[38px] font-bold mt-[24px]">Template 1</h3>
            <p className="opacity-70 mt-[12px]">Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
            <div className="flex items-center gap-4 mt-[36px]">View Portfolio <FaArrowRightLong /></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
