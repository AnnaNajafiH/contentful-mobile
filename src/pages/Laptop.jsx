import { createClient } from "contentful";
import { useState, useEffect } from "react";

function LaptopDetails() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: "master",
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const fetchLaptops = async (type = "laptop", limit = 10, skip = 0) => {
    try {
      const entry = await client.getEntries({
        content_type: type,
        limit,
        skip,
      });
      setData(entry?.items);
      console.log(entry.items);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchLaptops("laptop", 10, 0);
    return () => {};
  }, []);

  return (
    <div className="w-5/6 mx-auto  my-4">
      <div className="text-center p-4 mb-4">
        <h1 className="font-bold text-3xl text-gray-800 animation animate-pink">
          Find Your Perfect Laptop!
        </h1>{" "}
        <br />
        <p className="text-gray-600">
          Choosing the right laptop depends largely on how you plan to use it.
          While the technical specs are crucial, the design often plays a key
          role in your decision. From sleek and stylish to robust and
          functional, there's a laptop for every preference. Generally, laptops
          can be categorized into three main types, each catering to different
          needs and tastes. Explore our range to find the one that fits you
          perfectly.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 static">
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((e) => (
            <div
              key={e?.fields.laptopId}
              className="sub-container h-80 w-60 border border-grey-400 hover:bg-gray-100"
            >
              <img
                src={e?.fields.imageLaptop.fields.file.url}
                alt="laptop"
                className="w-2/3 text-center h-40 cursor-pointer my-4 mx-auto"
              />
              <p className="text-blue-700 p-1 text-sm">
                {e?.fields.laptopName}
              </p>
              <p className="p-1 text-sm">
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
                <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
                {e.fields.ratingLaptop}
              </p>
              <button className="text-white bg-cyan-400 w-2/3 h-10 hover:bg-slate-950">
                More Info
              </button>
              <p className="text-red-600 p-1 text-sm">
                €{e?.fields.priceLaptop}
              </p>
              <div>
                {e?.fields.availabilityLaptop ? (
                  <div className="text-xs">
                    <span className="text-teal-500 p-1">In Stock</span>
                    <span> | Delivery, </span>
                    <span className="font-medium">
                      {e?.fields.deliveryLaptop}
                    </span>
                  </div>
                ) : (
                  <span className="text-red-600 text-xs uppercase text-center">
                    sold out
                  </span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LaptopDetails;
