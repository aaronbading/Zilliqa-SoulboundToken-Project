import { useState } from "react";
import cn from "classnames";
import { useZilliqa } from "../providers/ZilliqaProvider";
import Button from "../components/Button";
import Input from "../components/Input";

const Dummy = () => {
  const { zilliqa } = useZilliqa();
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("-");
  const [isLoading, setIsLoading] = useState(false);

  const getWalletBalance = async () => {
    setIsLoading(true);
    const res = await zilliqa.blockchain.getBalance(address);
    setBalance(res.result.balance);
    setIsLoading(false);
  };

  return (
    <div className={cn("flex","flex-col","items-center", "mt-8")}>
      <Input
        onChange={(e) => setAddress(e.target.value)}
        value={address}
      />{" "}
      (try: 0xa6BdD5f222f678808eCC4E34Bc34E5f0c7204044)
      <p className={cn("my-4")}>Balance: {isLoading ? "Loading..." : balance}</p>
      <Button onClick={() => getWalletBalance()}>Get Balance</Button>
    </div>
  );
};

export default Dummy;
