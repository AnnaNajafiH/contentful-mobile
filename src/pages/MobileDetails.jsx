import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { client } from "./client";

const MobileDetails = () => {
const [mobile, setMobile] = useState(null);
const navigate = useNavigate();
const {mobileId} = useParams();
console.log(mobileId);

const getMobileById = async(mobileId) => {
try {
const entry = await client.getEntry(mobileId);
console.log(entry);
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
<div className="flex flex-wrap  w-5/6 mx-auto ">
    <div className="w-2/5">
    <Link onClick={()=> navigate(-1) } className="hover:bg-sky-600 hover:text-white m-1 rounded"> <i className="fa-solid fa-angles-left"></i></Link>
        <img src={mobile.image.fields.file.url} alt="" />
    </div>
    <div className="w-2/5">
    <p>{mobile.mobileName}</p>
    </div>
    <div className=" w-1/5">
   
    </div>
    
    

</div>
))
}

export default MobileDetails