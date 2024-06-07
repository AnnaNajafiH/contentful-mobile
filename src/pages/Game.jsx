import { createClient } from "contentful";
import { useState, useEffect } from "react";
import StarRating from "../component/StarRating.jsx";
import { Link } from "react-router-dom";

function GameData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: "master",
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const fetchMobiles = async (type = "game", limit = 12, skip = 0) => {
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

  // const Star = ({ filled }) => {
  //   return (
  //     <span style={{ color: filled ? '#ffbb00' : 'lightgray', fontSize: '18px'}}>
  //       ★
  //     </span>
  //   );
  // };
  // const [score, setScore] = useState(3); // 초기 점수 설정

  // const StarRating = ({ score }) => {
  //   const totalStars = 5;
  
  //   return (
  //     <div>
  //       {[...Array(totalStars)].map((_, index) => (
  //         <Star key={index} filled={index < score} />
  //       ))}
  //     </div>
  //   );
  // };

  useEffect(() => {
    fetchMobiles("game", 12, 0);
    return () => {};
  }, []);

  return (
    <div className="w-5/6 mx-auto  my-4">
      
      <div className="flex flex-wrap gap-4 static">
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((e) => (
            <div
              key={e?.fields.GameId}
              className="sub-container h-80 w-48 border border-grey-400 hover:bg-gray-100"
            >
              <img
                src={e?.fields.image.fields.file.url}
                alt="mobile"
                className=" text-center h-40 cursor-pointer my-4 mx-auto"
              />
              <p className="text-blue-700 p-1 text-sm">
                {e?.fields.gameName}
              </p>
              <p className="p-1 text-sm">
              <StarRating score={e.fields.rating} />
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

export default GameData;
