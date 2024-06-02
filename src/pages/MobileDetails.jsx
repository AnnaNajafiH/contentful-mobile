import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { client } from "./client";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MobileDetails = () => {
const [mobile, setMobile] = useState(null);
const navigate = useNavigate();
const {mobileId} = useParams();

const getMobileById = async(mobileId) => {
try {
const entry = await client.getEntry(mobileId);
return entry;
} catch (error) {
console.log('Error fetching the Entry', error);
}
}
useEffect(() => {
const getMobile = async () => {
const entry = await getMobileById(mobileId);
setMobile(entry.fields);
}
getMobile();
}, [mobileId]);

return (
    !mobile ? <div>Loading....</div> :(
<div className="flex flex-wrap w-5/6 mx-auto my-6 ">
    <div className="w-2/5 p-2 ">
    
        <img src={mobile.image.fields.file.url} alt="mobile image" />
        <Link onClick={()=> navigate(-1) } className="hover:bg-orange-600 hover:text-white mt-4 rounded"> <i className="fa-solid fa-angles-left"></i></Link>
    </div>

    <div className="w-2/5 text-lg font-medium px-4 py-2  ">
    <p>{mobile.quickview.content[0].content[0].value}</p>
    <br />
    <p className="text-sm  border-b-2 border-gray-300">
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star text-orange-400"></i>
                <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
                <i className="fa-solid fa-star-half-stroke text-orange-400"></i>
                {mobile.rating}
              </p>
              <p className="text-red-600 p-1 text-sm">€{mobile?.price}</p>
              <h2 className="text-sky-400 text-base">FREE Returns</h2>
              <p className="text-xs italic">Prices for items sold by TechTop include VAT. 
              Depending on your delivery address, VAT may vary at Checkout. </p>
            <br />
            <Tabs>
                <TabList >
                    <Tab >Details</Tab>
                    <Tab>More Information</Tab>
                </TabList>
                <TabPanel >
                <p className='text-xs'>{mobile.moreInformation.content[0].content[0].value}</p>
                </TabPanel>
                <TabPanel>
                <p className='text-base font-bold'>MODEL :  <span className='text-sm font-normal'>{mobile.model}</span></p>
                <p className='text-base font-bold'>BRAND :  <span className='text-sm font-normal'>{mobile.brand}</span></p>
                <p className='text-base font-bold'>COLOR :  <span className='text-sm font-normal'>{mobile.color}</span></p>
                <p className='text-base font-bold'>SCREEN :  <span className='text-sm font-normal'>{mobile.screen}</span></p>
                <p className='text-base font-bold'>PROCESSOR :  <span className='text-sm font-normal'>{mobile.processor}</span></p>
                <p className='text-base font-bold'>RAM :  <span className='text-sm font-normal'>{mobile.ram}</span></p>
            

                </TabPanel>
            </Tabs>
    </div>
    
    <div className=" w-1/5 p-2  "> right side
    </div>
</div>
))
}

export default MobileDetails