import { Zilliqa } from "@zilliqa-js/zilliqa";
import { useEffect, useState } from "react";

const App = () => {
  const [zilliqaClient, setZilliqaClient] = useState<Zilliqa|null>(null);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("-")
  const [isLoading, setIsLoading] = useState(false)

  const test = async () => {
    setIsLoading(true)
    const zilliqa = zilliqaClient;
    if (!zilliqa) {
      return
    }

    const res = await zilliqa.blockchain.getBalance(address);

    setBalance(res.result.balance);
    setIsLoading(false)
  }

  useEffect(() => {
    const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');
    setZilliqaClient(zilliqa);
  }, [])
  
  return (
    <div>
      <input onChange={e => setAddress(e.target.value)} value={address} /> (try: 0xa6BdD5f222f678808eCC4E34Bc34E5f0c7204044)
      <p>Balance: {isLoading ? "Loading..." : balance}</p>
      <button onClick={() => test()} disabled={!zilliqaClient}>Get Balance</button>
    </div>
  );
}

export default App;
