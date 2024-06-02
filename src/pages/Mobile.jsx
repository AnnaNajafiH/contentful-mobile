import { useState, useEffect } from "react";
import {Link }from 'react-router-dom';
import {client} from './client';

function MobileData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchMobiles = async (type = "mobile") => {
    try {
      const entries = await client.getEntries({content_type: type});
      setData(entries?.items);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchMobiles("mobile");
    return () => {};
  }, []);

  return (
    <div className="w-5/6 mx-auto  my-4">
      <div className="text-center p-4 mb-4">
        <h1 className="font-bold text-3xl text-gray-800 animation animate-pink">WELCOME TO TechTop!</h1> <br />
        <p className="text-gray-600">TechTop is an online shop for smartphones, tablets, and smart
          gadgets. We deliver to customers in 190 countries.</p>

      </div>
      <div className="flex flex-wrap gap-4 static">
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((e) => (
            <div
              key={e?.sys.id}
              className="sub-container h-80 w-48 border border-grey-400 hover:bg-gray-100"
            >
              <img
                src={e?.fields.image.fields.file.url}
                alt="mobile"
                className="w-2/3 text-center h-40 cursor-pointer my-4 mx-auto"
              />
              <p className="text-blue-700 p-1 text-sm">
                {e?.fields.mobileName}
              </p>
              <p className="p-1 text-sm ">
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
                <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
                {e.fields.rating}
              </p>
              
              
              
              <button className="text-white bg-cyan-400 w-2/3 h-10 hover:bg-slate-950">
                <Link to={`/details/${e?.sys.id}`}>More Info</Link>
                
              
              </button>
              <p className="text-red-600 p-1 text-sm">€{e?.fields.price}</p>
              <div>
                {e?.fields.status ? (
                  <div className="text-xs">
                    <span className="text-teal-500 p-1">In Stock</span>
                    <span> | Delivery, </span>
                    <span className="font-medium">{e?.fields.delivery}</span>
                  </div>
                ) : (
                  <span className="text-red-600 text-xs uppercase text-center p-1">
                    sold out
                  </span>
                )}
              </div>
            </div>
          ))
        )};
      </div>
    </div>
  );
}

export default MobileData;
