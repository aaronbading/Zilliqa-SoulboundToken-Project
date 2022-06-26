import image from "../../public/img/Educational.jpg";
import { ReactComponent as Dots } from "../assets/dots.svg";
import { ReactComponent as SciencePerson } from "../assets/dots.svg";

const Educational = () => {
  return (
    <div className="text-gray-700 dark:text-white body-font">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mx-auto sm:text-center lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Earn an SBT Achievement
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight  sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <div className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                  <Dots />
                </div>

                <span className="relative"> </span>
              </span>
              Deploy a SmartContract and earn an achievement for your Soul-Bound
              Token.
            </h2>
            <p className="text-base  md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src={image}
              alt="Inspirational"
            />
          </div>
          <p className="max-w-xl mb-4 text-base sm:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris aliquip ex ea.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            <SciencePerson />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Educational;
