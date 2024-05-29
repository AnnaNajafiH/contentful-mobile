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
         
          <div key={e?.fields.mobileId} className='h-80 w-48 border border-grey-400 mb-4 '>
            <img src={e?.fields.image.fields.file.url} alt="mobile" className='h-50'/>
            <p className='text-blue-600'>{e?.fields.mobileName}</p>
            <p>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
              
            {e.fields.rating}</p>
            <p className='text-red-600'>{e?.fields.price}</p>
            
          </div>
         
        ))
      )}
    </>
  );
}

export default MobileData;
