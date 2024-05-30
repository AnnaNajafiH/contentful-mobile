import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Phone from "./pages/Phone";
import Computer from "./pages/Computer"
import Game from "./pages/Game";
import Sale from "./pages/Sale";


import MobileData from "./mobile/MobileData";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Phone />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/game" element={<Game />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
      {/* <Footer /> */}
      <div className="w-5/6 mx-auto flex gap-4">
      <MobileData />
    </div>
    </BrowserRouter>
  );
}

export default App;
