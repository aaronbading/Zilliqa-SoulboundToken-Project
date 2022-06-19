import React from "react";
import { useForm } from "react-hook-form";

import { AiOutlineBlock } from "react-icons/ai";
import Button from "../components/Button";

const Minting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
    // client logic for minting
  };

  return (
    <div className="flex justify-between items-center flex-col">
      <div className="h-52 w-full rounded bg-gray-100 mb-16 flex justify-center items-center">
        <p>SOME CONTENT</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md ">
        <div className="md:flex md:items-center mb-7">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4"
              htmlFor="walletAddress"
            >
              Wallet Address
            </label>
          </div>
          <div className="md:w-2/3 relative">
            <input
              {...register("walletAddress", { required: "This is required" })}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 invalid:border-red-500"
              id="walletAddress"
            ></input>
            <p className="h-6 absolute top-11 text-xs font-bold text-red-400 transition-all">
              {errors.walletAddress?.message}
            </p>
          </div>
        </div>

        <div className="md:flex md:items-center mb-10">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4 "
              htmlFor="url"
            >
              URL
            </label>
          </div>
          <div className="md:w-2/3 relative">
            <input
              {...register("url", { required: "This is required" })}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 invalid:border-red-500"
              id="url"
            ></input>
            <p className="h-6 absolute top-11 text-xs font-bold text-red-400 transition-all">
              {errors.url?.message}
            </p>
          </div>
        </div>
        {/* <p className="h-6">{errors.url?.message}</p> */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <Button>
              <AiOutlineBlock className="scale-150" />
              Mint
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Minting;
