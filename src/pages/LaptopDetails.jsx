import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { client } from "./client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const LaptopDetails = () => {
  const [laptop, setLaptop] = useState(null);
  const navigate = useNavigate();
  const { laptopId } = useParams();

  const getLaptopById = async (laptopId) => {
    try {
      const entry = await client.getEntry(laptopId);
      console.log(entry);
      return entry;
    } catch (error) {
      console.log("Error fetching the Entry", error);
    }
  };
  useEffect(() => {
    const getLaptop = async () => {
      const entry = await getLaptopById(laptopId);
      setLaptop(entry.fields);
    };
    getLaptop();
  }, [laptopId]);

  return !laptop ? (
    <div>Loading....</div>
  ) : (
    <div className="flex flex-wrap w-5/6 mx-auto my-6 ">
      <div className="w-2/5 p-2 ">
        <img src={laptop.imageLaptop.fields.file.url} alt="laptop image" />
        <Link
          onClick={() => navigate(-1)}
          className="hover:bg-orange-600 hover:text-white mt-4 rounded"
        >
          {" "}
          <i className="fa-solid fa-angles-left"></i>
        </Link>
      </div>

      <div className="w-2/5 text-lg font-medium px-4 py-2  ">
        <p>{laptop.quickview.content[0].content[0].value}</p>
        <br />
        <p className="text-sm  border-b-2 border-gray-300">
          <i className="fa-solid fa-star text-orange-400"></i>
          <i className="fa-solid fa-star text-orange-400"></i>
          <i className="fa-solid fa-star text-orange-400"></i>
          <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
          <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
          {laptop.rating}
        </p>
        <p>
          <p className="text-red-600 p-1 text-sm">€{laptop?.price}</p>
        </p>
        <h2 className="text-sky-400 text-base">FREE Returns</h2>
        <p className="text-xs italic">
          Prices for items sold by TechTop include VAT. Depending on your
          delivery address, VAT may vary at Checkout.{" "}
        </p>
        <br />
        <Tabs>
          <TabList>
            <Tab>Details</Tab>
            <Tab>More Information</Tab>
          </TabList>
          <TabPanel>
            <p className="text-xs">
              {laptop.moreInformationLaptop.content[0].content[0].value}
            </p>
          </TabPanel>
          <TabPanel>
            <p className="text-base font-bold">
              MODEL :{" "}
              <span className="text-sm font-normal">{laptop.model}</span>
            </p>
            <p className="text-base font-bold">
              BRAND :{" "}
              <span className="text-sm font-normal">{laptop.brand}</span>
            </p>
            <p className="text-base font-bold">
              COLOR :{" "}
              <span className="text-sm font-normal">{laptop.color}</span>
            </p>
            <p className="text-base font-bold">
              SCREEN :{" "}
              <span className="text-sm font-normal">{laptop.screen}</span>
            </p>
            <p className="text-base font-bold">
              PROCESSOR :{" "}
              <span className="text-sm font-normal">{laptop.processor}</span>
            </p>
            <p className="text-base font-bold">
              RAM : <span className="text-sm font-normal">{laptop.ram}</span>
            </p>
          </TabPanel>
        </Tabs>
      </div>

      <div className=" w-1/5 p-2  "> right side</div>
    </div>
  );
};

export default LaptopDetails;
