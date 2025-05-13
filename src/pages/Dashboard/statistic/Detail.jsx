import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-[#eee]">
        <div className="container mx-auto grid grid-cols-2 py-6 shadow-2xl rounded-2xl p-5 bg-[#ffffff]">
          <div className="">
            <img src={data?.img} alt="" className="object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer" />
          </div>
          <div className=" flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer">{data?.name}</h1>
            <h3 className="text-3xl font-bold my-4 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer">{data?.description}</h3>
            <p className="text-2xl font-bold text-blue-600 object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer">
              {data?.price} USD
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
