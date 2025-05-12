import React from "react";
import image1 from "../../assets/aboutCard1.jpg";
import image2 from "../../assets/aboutCard2.png";

const About = () => {
  return (
    <>
      <div className="container mx-auto mt-[128px] flex max-[1000px]:flex-col max-[1000px]:items-center max-[100px]:gap-10">
        <div className="w-1/2 flex flex-col justify-center">
          <p>About us</p>
          <h3 className="text-[54px] font-bold mt-2 mb-8">
            Our designs solve problems
          </h3>
          <p className="text-[#282938] mr-[158px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div>
          <img src={image1} alt="" />
        </div>
      </div>

      <div className="container  mx-auto  mt-[126px] bg-[#F4F5F5] mb-[128px]">
        <div className="flex  h-1/2"> 
          <div className=" px-[80px] py-[96px] w-1/2">
            <h3 className="font-bold text-[38px]">Goal focussed</h3>
            <p className="text-[#282938] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className=" px-[80px] py-[96px] w-1/2">
          <h3 className="font-bold text-[38px]">Goal focussed</h3>
            <p className="text-[#282938] mt-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
