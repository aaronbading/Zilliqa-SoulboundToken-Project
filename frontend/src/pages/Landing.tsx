import React from "react";
import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import logo from "../img/ZSBT-logos.jpeg";
import Button from "../components/Button";

export default function Landing() {
  return (
    <div className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
            Zilliqua Soul-Bound Token
          </h1>
          <p className="mb-8 leading-relaxed">Put some information</p>
          <p className="mb-8 leading-relaxed">Put some information</p>
          <div className="flex justify-center">
            <Button>Button </Button>
          </div>
        </div>
        <div className="rounded lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            alt="logo"
            src={logo}
            className="object-cover object-center rounded"
          />
        </div>
      </div>
    </div>
  );
}
