import { Routes, Route } from "react-router-dom";
import Dummy from "./Dummy";
import ZilliqaProvider from "./providers/ZilliqaProvider";

const App = () => {

  return (
    <div>
      <ZilliqaProvider>
        <Routes>
          <Route path="/" element={<Dummy />} />
        </Routes>
      </ZilliqaProvider>
    </div>
  );
}

export default App;
