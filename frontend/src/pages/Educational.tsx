import logo from "../../public/img/ZSBT-logos.jpeg";

import Link from "../components/Link";
import AdaptiveContent from "../components/AdaptiveContent";
import { AdaptiveContentProps } from "../types/types";

const content: AdaptiveContentProps[] = [
  {
    title: "The Set Up",
    subtitle: "Setting up the Neo Savant IDE and Zilpay wallet",
    content:
      "Download Zilpay wallet. Create another account on your ZilPay wallet. Request testnet $ZIL from faucet by following instructions in the link below. Switch to testnet on your IDE and your set up is complete!",
      /*Zilpay walllet link: https://zilpay.io/*/
      /*https://dev.zilliqa.com/docs/dev/dev-tools-faucet/*/
  },
  {
    title: "Scilla Language",
    subtitle: "Writing your smart contract",
    content:
      "Create a new file by clicking the file icon on the upper left corner. Refer to the smart contracts in our github repository.(Zilliqa-Soulbound-Project/contract/example/proxy.scilla) modify it such that you can call the transition Earn_achievement in SBT_profile.",
  },
  {
    title: "Achievement Unlocked!",
    subtitle: "Deploying the smart contract and earning the achievement",
    content:
      "After deploying the smart contract and calling the Earn_achievement transition, you have now earned your achievement! It should be displayed in your profile.",
  },
];

export default function Educational() {
  return (
    <div className="text-gray-700 dark:text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Deploy a smart contract and earn your achievement!
          </h1>

          {content.map((items) => (
            <AdaptiveContent
              title={items.title}
              subtitle={items.subtitle}
              content={items.content}
            />
          ))}

          <div className="flex justify-center mt-3">
            <Link to="/profiles">View Profiles</Link>
          </div>
        </div>
        <div className=" rounded lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
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
