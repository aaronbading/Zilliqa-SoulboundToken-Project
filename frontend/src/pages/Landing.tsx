import logo from "../img/ZSBT-logos.jpeg";
import Link from "../components/Link";

export default function Landing() {
  return (
    <div className="text-gray-700 dark:text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Zilliqua Soul-Bound Token
          </h1>
          <h2 className="title-font sm:text-1xl text-3xl mb-4 font-medium text-gray-900 dark:text-white my-12">
            What is an SBT ?
          </h2>
          <p className="mb-8 leading-relaxed">
            The Zilliqa Soul-Bound Token is intended to be a proof-of-concept
            utility token that allows users to own their on-chain identity. At
            its core, it is non-transferable token that users mint for
            themselves. This has been implemented on the Zilliqa blockchain
            using the native smart-contract language Scilla.
          </p>
          <h2 className="title-font sm:text-1xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            What is its purpose ?
          </h2>
          <p className="mb-8 leading-relaxed">
            The token’s purpose is to bring utility by incentivizing users to
            interact with the underlying platform to grow their SBT Profile. An
            example of user incentivization is earning educational achievements
            for completing a course or solving a problem. Rewards for
            participation could theoretically be in the forms of NFTs, digital
            assets or just a simple “kudos” on the Profile Page. This system
            establishes a sense of reputation and trust in profiles which is
            essential for thriving online communities.
          </p>
          <h2 className="title-font sm:text-1xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            What is the vision of SBTs?
          </h2>
          <p className="mb-8 leading-relaxed">
            The concept itself of an SBT is broad in nature and quite novel.
            Thus, the vision of project reaches far beyond what has been
            currently implemented. Nevertheless, this project serves as one of
            many starting points for powerful idea that will enable another
            layer of incentivization on top of decentralized digital ownership.
          </p>
          <div className="flex justify-center">
            <Link to="/create-profile">Minting Page</Link>
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
