import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage:
          "url('https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2018/02/27131026/wenndassmartphoneundderpcoderlaptopsichnichtverbindentippstrickstreibermtpinstallationreset-960x540.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <main className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-300 mb-4">
            Welcome to TechTop!
          </h2>
          <p className="text-lg font-bold text-blue-300 mb-8">
            TechTop is an online shop for smartphones, tablets, and smart
            gadgets. We deliver to customers in 190 countries.
          </p>
          <Link
            to="/sale"
            className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Explore Our Sale
          </Link>
        </div>
      </main>
    </div>
  );
      
};

export default LandingPage;

