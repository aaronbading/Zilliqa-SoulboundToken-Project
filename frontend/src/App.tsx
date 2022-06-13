import { Routes, Route } from "react-router-dom";
import Dummy from "./Dummy";
import WalletProvider from "./providers/walletProvider";
import ZilliqaProvider from "./providers/ZilliqaProvider";

const App = () => {

  return (
    <div>
      <WalletProvider>
        <ZilliqaProvider>
          <Routes>
            <Route path="/" element={<Dummy />} />
          </Routes>
        </ZilliqaProvider>
      </WalletProvider>
    </div>
  );
}

export default App;
