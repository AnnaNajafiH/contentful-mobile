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
          <div key={e?.fields.mobileId}>
            {e?.fields.mobileName}
          </div>
        ))
      )}
    </>
  );
}

export default MobileData;
