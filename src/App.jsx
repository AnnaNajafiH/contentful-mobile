import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Phone from "./pages/Mobile";
import Laptop from "./pages/Laptop";
import Game from "./pages/Game";
import Sale from "./pages/Sale";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";
import MobileDetails from "./pages/MobileDetails";


function App() {
  return (
    /*  <BrowserRouter> */
    <>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="game" element={<Game />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contentful-mobile" element={<LandingPage/>} />
          <Route path="details/:mobileId" element = {<MobileDetails />} />
        </Route>
      </Routes>
      {/* <LandingPage/> */}
      <Footer />
    </>
  );
}

export default App;
