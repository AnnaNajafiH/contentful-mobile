import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Mobile from "./pages/Mobile";
import Laptop from "./pages/Laptop";
import Game from "./pages/Game";
import Sale from "./pages/Sale";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/game" element={<Game />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/details/:mobileId" element = {<MobileDetails />} />
        </Route>
      </Routes>
      {/* <LandingPage/> */}
      <Footer />
    </>
  );
}

export default App;
