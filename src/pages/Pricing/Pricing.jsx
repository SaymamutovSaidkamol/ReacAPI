import React from "react";
import pointer from "../../assets/Pointer.png";

const Pricing = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-[128px]">
      <div className="w-[562px] flex flex-col justify-center items-center gap-4">
        <h3 className="text-[48px] font-bold">Our Pricing Plans</h3>
        <p className="text-[#282938] opacity-70 text-center">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>

      <div className="container mt-[64px] grid grid-cols-3 mb-[50px] max-[700px]:grid-cols-1 max-[700px]:place-items-center  max-[800px]:grid-cols-2 max-[800px]:gap-4">
        <div className="w-[406px] h-[745px] bg-[#F4F6FC] text-black">
          <div className="pl-12 pt-[64px]">
            <div className="flex gap-2 items-center mb-[20px]">
              <p className="text-[38px] font-bold">$339</p>{" "}
              <p className="text-[#2405F2]">Multi Design</p>
            </div>
            <h3 className="text-[28px] mb-[8px]">Website Page </h3>
            <p className="opacity-70 mb-[50px]">
              When you’re ready to go beyond prototyping in Figma, Webflow’s
              ready to help.
            </p>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[12px]"><img src={pointer} alt="" />All limited links</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Own analytics platform</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Chat support</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Optimize hashtags</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Unlimited users</div>
            </div>
            <div className="flex w-[310px] justify-center items-center mt-[109px] ">
              <button className=" w-[254px] h-[64px] rounded-[41px] bg-black text-white">Get Start</button>
            </div>
          </div>
        </div>
        <div className="w-[406px] h-[745px] bg-[#1C1E53] text-white">
          <div className="pl-12 pt-[64px]">
            <div className="flex gap-2 items-center mb-[20px]">
              <p className="text-[38px] font-bold">$339</p>{" "}
              <p className="text-[#FCD980]">Multi Design</p>
            </div>
            <h3 className="text-[28px] mb-[8px]">Website Page </h3>
            <p className="opacity-70 mb-[50px]">
              When you’re ready to go beyond prototyping in Figma, Webflow’s
              ready to help.
            </p>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[12px]"><img src={pointer} alt="" />All limited links</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Own analytics platform</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Chat support</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Optimize hashtags</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Unlimited users</div>
            </div>
            <div className="flex w-[310px] justify-center items-center mt-[109px] ">
              <button className=" w-[254px] h-[64px] rounded-[41px] bg-[#FCD980] text-black">Get Start</button>
            </div>
          </div>
        </div>
        <div className="w-[406px] h-[745px] bg-[#F4F6FC] text-black">
          <div className="pl-12 pt-[64px]">
            <div className="flex gap-2 items-center mb-[20px]">
              <p className="text-[38px] font-bold">$339</p>{" "}
              <p className="text-[#2405F2]">Multi Design</p>
            </div>
            <h3 className="text-[28px] mb-[8px]">Website Page </h3>
            <p className="opacity-70 mb-[50px]">
              When you’re ready to go beyond prototyping in Figma, Webflow’s
              ready to help.
            </p>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-[12px]"><img src={pointer} alt="" />All limited links</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Own analytics platform</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Chat support</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Optimize hashtags</div>
              <div className="flex gap-[12px]"><img src={pointer} alt="" />Unlimited users</div>
            </div>
            <div className="flex w-[310px] justify-center items-center mt-[109px] ">
              <button className=" w-[254px] h-[64px] rounded-[41px] bg-black text-white">Get Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
