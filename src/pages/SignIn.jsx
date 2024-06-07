import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios";


const SignIn = () => {

    const [data, setData] = useState({
        eNumber: ''
    });



    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('https://jsonplaceholder.typicode.com/posts', { data })        .then(res => console.log(res));
            setData({     
                eNumber: ''
            })
        } catch (error) {
            console.log('Failed to submit the create, please try again', error)
        }

    } 

return (
<div>
    <div className=" w-96 mx-auto my-4 ">
        <div className="font text-5xl text-center py-4 text-sky-500 font-bold ">TechTop</div>
        <form className="border-gray-200 border rounded-lg" onSubmit={handleSubmit}>
            <p className="font-medium text-2xl p-4 mx-4 font-sans">Sign In</p>

        <label htmlFor="emailPhone" className="my-2 w-80 mx-8 ">Email or mobile phone number</label><br />
        <input type="text" id='emailPhone' name="eNumber" className="w-80 mx-8 border rounded-md mb-2 p-1" 
        value={data.eNumber} onChange={handleChange} required /><br />

        <input type="submit" value='Continue' className="bg-yellow-300 my-2 rounded-xl border border-yellow-400 py-1 hover:bg-yellow-400
                 hover:border-none w-80 mx-8 hover:cursor-pointer"  />

        <p className="text-sm mx-auto w-80 my-3 py-3">By continuing, you agree to TechTops's
            <Link to='https://www.termsfeed.com/blog/privacy-policy-url/' className="text-sky-400">
            Conditions of Use and Privacy Notice
            </Link>
        </p>
        </form>

    </div>
    <p className="text-center">New to TechTop?</p>
    <div className="border border-gray-200 bg-gray-100  hover:border-none hover:bg-gray-200 w-96 mx-auto text-center my-4 rounded-lg p-1 hover:cursor-pointer">
        <button className="hover:underline " ><Link className="" to='/createaccount'>Create your TechTop account</Link>
        </button></div>
</div>
)
}

export default SignIn