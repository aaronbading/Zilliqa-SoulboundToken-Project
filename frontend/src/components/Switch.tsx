import { useState } from "react";
import { useColorMode } from "../providers/ColormodeProvider";

function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = " transform translate-x-5";
  const { toggleTheme } = useColorMode();

  const changeMode = async (mode: boolean) => {
    setToggle(mode);
    toggleTheme();
  };

  return (
    <div className="w-14 h-8 mr-5">
      <div className="flex flex-col">
        {/*   Switch Container */}

        <div
          className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
          onClick={() => {
            changeMode(!toggle);
          }}
        >
          <div
            className={
              "bg-black md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          >
            <label
              htmlFor="dark-mode-toggle"
              className="align-middle w-full h-full bg-gray-800 dark:bg-white rounded-full p-1 flex justify-between cursor-pointer"
            >
              <span className="inline dark:hidden">🌞</span>
              <span className="hidden dark:inline">🌛</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Switch;
