import React from "react";
import { Link } from "react-router-dom";
import { createClient } from "contentful";
import { useState, useEffect } from "react";
// import SaleDetails from "./SalesDetails";


function Sale() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //Establish connection with Contentful. This is where we are able to get the content/information from.
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: "master",
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const fetchSale = async (type = "sale", limit = 10, skip = 0) => {
    try {
      const entry = await client.getEntries({
        content_type: type,
        limit,
        skip,
      });
      setData(entry?.items);
      console.log(entry?.items[0]);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };
//useEffect to run the fetchSale function on the first render. The return is necessary as the nameless function returns nothing. The dependency array ensures that whatever side effect may come as a result of the render is immediately terminated.
  useEffect(() => {
    fetchSale("sale", 10, 0);
    return () => {};
  }, []);

  // const fetchSaleId = async (type = "saleId", limit = 10, skip = 0) => {
  //   try {
  //     const entry = await client.getEntries({
  //       content_type: type,
  //       limit,
  //       skip,
  //     });
  //     setData(entry?.items);
  //     console.log(entry?.items[0].fields.saleId);
  //   } catch (error) {
  //     console.error(error);
  //     setError(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchSaleId("saleId", 10, 0);
  //   return () => {};
  // }, []);

  return (
    
    <div className="w-5/6 mx-auto my-4">

{/* <Confetti/> */}

      <div className="text-center p-4 mb-4">
        <h2 className="text-4xl font-bold text-blue-300 mb-4">
          
        </h2>
        <p className="text-lg font-bold text-blue-300 mb-8">
        </p>
        <Link
         onClick={()=> <MobileDetails/>} to={`https://www.amazon.de/-/en/deals?ref_=nav_cs_gb&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522`}
          className="bg-blue-300 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Explore Our Sale
        </Link>
      </div>

      
      <div className="flex flex-wrap gap-4">
      
{
  (
    data?.map((e) => (
      <div
        key={e?.sys.id}
        className="sub-container h-80 w-48  border-grey-400 hover:bg-gray-100"
      >
        <img
          src={e?.fields.saleImg.fields.file.url}
          alt="mobile sale"
          className="w-2/3 text-center h-40 cursor-pointer my-4 mx-auto"
        />
        <p>{e?.fields.saleImg.fields.title}</p>
  

        <Link to={`https://www.amazon.de/-/en/Minecraft-Nintendo-Switch/dp/B06Y5VBFNB/ref=sr_1_9?crid=3M1H09O4IZWWD&dib=eyJ2IjoiMSJ9.mftq8pr0P1JK_J78IFDnr3OnPXRfWsklkOXxsiUGvwpp_lshC56BpL3Q0N2dy3D9uw1Oikmna4Avt83GC__kDf-kU86XXKzmd8W9DeHo8vl-tuVGcVirb-TXtx6iP0dlbsZuo0sOUzhzEHPI1pCM7fP4e2YPzsB8jI-lE2QNNzVtqjVK6cBWwP4YAiL3101ENQflQ_x3SmsxkPzCeldJx5sZoi-GpNbMRahNgczJVwsvz9c9EVkD8h-0t_UVXgwUJHe_v0JuUUH3uYHyTzMzDvgPxlgOKWCygHMxpLPCnv0.dAZxJqOcu-WIKMilXlnHjoGGhnDgEMwihbrD-DGGWNI&dib_tag=se&keywords=minecraft+game&qid=1717716220&sprefix=minecraft+game%2Caps%2C91&sr=8-9`}>
        
        </Link>
      <h2 className="text-red-700">Check out our FIRE SALE HERE</h2>
      </div>
    ))
  )
}

{/* {
  (
    data?.map((e) => (
      <div
        key={e?.sys.id}
        className="sub-container h-80 w-48  border-grey-400 hover:bg-gray-100"
      >
        <img
          src={e?.fields.saleId}
          alt="mobile sale"
          className="w-2/3 text-center h-40 cursor-pointer my-4 mx-auto"
        />
      </div>
    ))
  )
} */}
            <div className="sub-container h-80 w-60 border border-grey-400 hover:bg-gray-100">
<div className="w-5/6 mx-auto  my-4">
<div className="flex flex-wrap gap-4 static">
</div>
</div>
<h2 className="text-2xl font-lighter text-red-300 mb-2 w-5/6 mx-auto my-4">
          Dive into our exclusive sale for amazing discounts on the latest
          laptops!
        </h2>

              <p className="text-red-700 p-1 text-sm">
                
              </p>
      </div>
      </div>
    </div>
          )
        }
 
//saleItemOne


export default Sale;