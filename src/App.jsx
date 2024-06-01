import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Phone from "./pages/Phone";
import Laptop from "./pages/Laptop";
import Game from "./pages/Game";
import Sale from "./pages/Sale";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    /*  <BrowserRouter> */
    <>
      <Nav />
      <Routes>
        <Route path="/">
          <Route path="/contentful-mobile/" element={<LandingPage />}></Route>
          <Route index element={<Phone />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/game" element={<Game />} />
          <Route path="/sale" element={<Sale />} />
        </Route>
      </Routes>
      {/* <LandingPage/> */}
      <Footer />
      {/*  </BrowserRouter> */}
    </>
  );
}

export default App;
