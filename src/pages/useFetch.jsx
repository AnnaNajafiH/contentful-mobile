import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(()=> {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally{
                setLoading(false);
            }
        };
            setTimeout(() => {
             fetchData();    
}, 2000);
       
    },[url])
  return (
    {data, error, loading}
  )
}

export default useFetch