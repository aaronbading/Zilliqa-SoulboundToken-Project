import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import cn from "classnames";

function WalletModal() {
  return (
    <div
      className={cn(
        "w-[100%]",
        "h-[100vh]",
        "bg-[#000d]",
        "flex",
        "trasition-all",
        " duration-100",
        "ease-in-out",
        "absolute",
        "justify-center",
        "items-center",
        "top-0",
        "opacity-0",
        "left-0"
      )}
      style={{ display: "" }}
      id="walletModal"
    >
      <div className="bg-white w-[90%] gap-3 flex flex-col justify-center min-h-[50vh] md:w-[50%]">
        <div className="flex justify-center">
          <AiOutlineClose className="font-bold text-3xl text-red-600" />
          <h1 className="text-lg font-bold">ZillPay Wallet is not installed</h1>
        </div>
        <div className="text-center w-[80%] mx-auto bg-slate-300 py-10">
          SOME TEXT
        </div>
        <div className="flex justify-center">
          <Button>
            <a href="https://zilpay.io/" target="_blank" rel="noreferrer">
              Download Wallet
            </a>
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default WalletModal;
