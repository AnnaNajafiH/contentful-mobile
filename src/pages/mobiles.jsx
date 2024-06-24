import useFetch from "./useFetch"
import { useState } from "react";
import {Link }from 'react-router-dom';
import { RotatingLines,Watch } from 'react-loader-spinner';


const Mobiles = () => {
  const [selectBrand, setSelectBrand] = useState('all');
    const {data, error, loading} = useFetch(`http://localhost:8000/mobiles`);
    //console.log(data);
    if(error) return console.error('Error in Fetching the data');
    if(loading) return <div className="relative inset-x-2/4 top-8 bottom-8">{
      (
      <RotatingLines visible={true} height="96" width="96" color="grey" strokeWidth="5" animationDuration="0.75"
          ariaLabel="rotating-lines-loading" wrapperStyle={{}} wrapperClass="" />)
      }</div>
    const handleBrandChange = (e) => {
      setSelectBrand(e.target.value);
    }
    const filteredData = selectBrand === 'all'? data: data.filter(e => e.brand === selectBrand);
  return (

    <div className="w-5/6 mx-auto  my-4">
    <div className="text-center p-4 mb-4 relative">
      <h1 className="font-bold text-3xl text-gray-800 animation animate-pink">WELCOME TO TechTop!</h1> <br />
      <p className="text-gray-600 mb-3">TechTop is an online shop for smartphones, tablets, and smart
        gadgets. We deliver to customers in 190 countries.</p>

      <div className="absolute left-0 pb-4">
      <label htmlFor="mob" className="">Select by :</label>
      <select name="mobile" id="mob" className="bg-slate-200 rounded-lg hover:bg-slate-300" onChange={handleBrandChange}>
      <option value="all">--product--</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
        <option value="Google">Google Pixel</option>
        <option value="VIVO">VIVO</option>
        <option value="Nokia">Nokia</option>
      </select> 
      </div>

    </div>
    <div className="flex flex-wrap gap-4 static mt-5">
      {error ? (
      <div>Error: {error.message}
      <p>looding......</p>
      </div>
      ) : (
        
        filteredData.map((mobile) => (
         <div
         key={mobile.mobile_id}
            className="sub-container h-80 w-48 border border-grey-400 hover:bg-gray-100"
          >
             <img
              src={mobile.image_url}
              alt="mobile"
              className="w-2/3 text-center h-40 cursor-pointer my-4 mx-auto"
            />
            <p className="text-blue-700 p-1 text-sm">
              {mobile?.mobile_name}
            </p>
            <p className="p-1 text-sm ">
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
              <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
              {mobile?.rating}
            </p>
            
            <button className="text-white bg-cyan-400 w-2/3 h-10 hover:bg-slate-950">
              <Link to={`/details/${mobile?.mobile_id}`}>More Info</Link>
              
            </button>
            <p className="text-red-600 p-1 text-sm">€{mobile?.price}</p>
            <div>
              {mobile?.status ? (
                <div className="text-xs">
                  <span className="text-teal-500 p-1">In Stock</span>
                  <span> | Delivery, </span>
                  <span className="font-medium">{mobile?.delivery}</span>
                </div>
              ) : (
                <span className="text-red-600 text-xs uppercase text-center p-1">
                  sold out
                </span>
              )}
            </div> 
          </div>   
        ))
      )}
    </div>
  </div> 
    
  )
}

export default Mobiles