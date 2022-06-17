import { Routes, Route } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import Dummy from "./pages/Dummy";
import Landing from "./pages/Landing";
import WalletProvider from "./providers/walletProvider";
import ZilliqaProvider from "./providers/ZilliqaProvider";

const App = () => {
  return (
    <WalletProvider>
      <ZilliqaProvider>
        <Routes>
          <Route element={<AppContainer />} path="/">
            <Route path="" element={<Landing />} />
            <Route path="dummy" element={<Dummy />} />
          </Route>
        </Routes>
      </ZilliqaProvider>
    </WalletProvider>
  );
};

export default App;
