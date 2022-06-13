import { Zilliqa } from "@zilliqa-js/zilliqa";
import { useEffect, useState } from "react";
import cn from "classnames";

const Dummy = () => {
  const [zilliqaClient, setZilliqaClient] = useState<Zilliqa | null>(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("-");
  const [isLoading, setIsLoading] = useState(false);

  const test = async () => {
    setIsLoading(true);
    const zilliqa = zilliqaClient;
    if (!zilliqa) {
      return;
    }

    const res = await zilliqa.blockchain.getBalance(address);

    setBalance(res.result.balance);
    setIsLoading(false);
  };

  useEffect(() => {
    const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");
    setZilliqaClient(zilliqa);
  }, []);

  return (
    <div className={cn("mt-8", "text-center")}>
      <input
        className={cn(
          "form-control",
          "px-3",
          "py-1.5",
          "text-base",
          "font-normal",
          "text-gray-700",
          "bg-white bg-clip-padding",
          "border border-solid border-gray-300",
          "rounded",
          "transition",
          "ease-in-out",
          "m-0",
          "focus:text-gray-700",
          "focus:bg-white",
          "focus:border-blue-600",
          "focus:outline-none"
        )}
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />{" "}
      (try: 0xa6BdD5f222f678808eCC4E34Bc34E5f0c7204044)
      <p>Balance: {isLoading ? "Loading..." : balance}</p>
      <button onClick={() => test()} disabled={!zilliqaClient}>
        Get Balance
      </button>
    </div>
  );
};

export default Dummy;
