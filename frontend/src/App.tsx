import { Routes, Route } from "react-router-dom";
import Dummy from "./Dummy";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dummy />} />
      </Routes>
    </div>
  );
}

export default App;
