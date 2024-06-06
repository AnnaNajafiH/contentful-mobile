import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "./component/Nav";
import Phone from "./pages/Mobile";
import Laptop from "./pages/Laptop";
import Game from "./pages/Game";
import Sale from "./pages/Sale";
import Footer from "./component/Footer";
import LandingPage from "./pages/LandingPage";
import MobileDetails from "./pages/MobileDetails";
import LaptopDetails from "./pages/LaptopDetails";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/createAccount";


function App() {
  const navigate = useNavigate();
  return (
    /*  <BrowserRouter> */
    <>
      <Nav />
      <Routes>
        <Route path="/">
          <Route index element={<Phone />} />
          ___
          <Route path="laptop" element={<Laptop />} />
          <Route path="game" element={<Game />} />
          <Route path="sale" element={<Sale />} />
          <Route path="contentful-mobile" element={<LandingPage />} />
          <Route path="details/:mobileId" element={<MobileDetails />} />
          <Route path="details/:laptopId" element={<LaptopDetails />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="createaccount" element={<CreateAccount />} />
        </Route>
      </Routes>
      <div className="flex justify-between mt-2">
        <button
          className="py-1  ml-12 border-cyan-400 border rounded-2xl px-5 mb-2
         text-cyan-400 hover:bg-cyan-400 hover:text-white"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="py-1 mr-12 border-cyan-400 border rounded-2xl px-5 mb-2
         text-cyan-400 hover:bg-cyan-400 hover:text-white"
          onClick={() => navigate(+1)}
        >
          Forward
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
