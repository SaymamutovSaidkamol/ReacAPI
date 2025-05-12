import React from "react";
import blog from "../../assets/blog.png";

const Blog = () => {
  return (
    <div className="container mx-auto mt-[128px]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[949px] flex flex-col justify-center items-center">
          <h3 className="text-[48px] font-bold text-center">
            A UX Case Study on Creating a Studious Environment for Students
          </h3>
          <p>Andrew Jonson Posted on 27th January 2021</p>
        </div>
      </div>
      <div className="mt-8">
        <img src={blog} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center mt-[48px]">
        <div className="flex flex-col justify-center items-center w-[831px]">
          <p className="text-center opacity-70 mb-[16px]">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle. By the
            same illusion which lifts the horizon of the sea to the level of the
            spectator on a hillside.
          </p>
          <p className="text-center opacity-70 text-[#2405F2]">Read more</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
