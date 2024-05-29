import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

function MobileData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    environment: 'master', 
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
  });

  const fetchMobiles = async (type = 'mobile', limit = 10, skip = 0) => {
    try {
      const entry = await client.getEntries({
        content_type: type,
        limit,
        skip,
      });
      setData(entry?.items);
      console.log(entry.items)
    } catch (error) {
      console.error(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchMobiles('mobile', 10, 0);
    return () => {};
  }, []);

  return (
    <>
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        data.map((e) => (
         
          <div key={e?.fields.mobileId} className='sub-container h-80 w-48 border border-grey-400 hover:bg-gray-100'>
            <img src={e?.fields.image.fields.file.url} alt="mobile" className='w-2/3 text-center h-50 cursor-pointer my-4 mx-auto'/>
            <p className='text-blue-600'>{e?.fields.mobileName}</p>
            <p>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
            {e.fields.rating}</p>
            <button className='text-white bg-cyan-400 w-2/3 h-10 hover:bg-slate-950'>More Info</button>
            <p className='text-red-600 '>€{e?.fields.price}</p>
            
          </div>
         
        ))
      )}
    </>
  );
}

export default MobileData;
