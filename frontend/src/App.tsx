import { Routes, Route } from "react-router-dom";
import AppContainer from "./components/AppContainer";
import Dummy from "./pages/Dummy";
import Landing from "./pages/Landing";
import Minting from "./pages/Minting";
import ProfileDetail from "./pages/ProfileDetail";
import Profiles from "./pages/Profiles";
import WalletProvider from "./providers/walletProvider";
import ZilliqaProvider from "./providers/ZilliqaProvider";

const App = () => {
  return (
    <WalletProvider>
      <ZilliqaProvider>
        <Routes>
          <Route element={<AppContainer />}>
            <Route path="/" element={<Landing />} />
            <Route path="/minting" element={<Minting />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profiles/:address" element={<ProfileDetail />} />
            <Route path="/dummy" element={<Dummy />} />
          </Route>
        </Routes>
      </ZilliqaProvider>
    </WalletProvider>
  );
};

export default App;
