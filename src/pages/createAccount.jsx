import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


const CreateAccount = () => {
    
    const [data, setData] = useState({
        name: '',
        ePhone: '',
        password: '',
        rePassword: ''
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post('https://jsonplaceholder.typicode.com/posts', { data })        .then(res => console.log(res));
            setData({      
                name: '',
                ePhone: '',
                password: '',
                rePassword: ''
            })
        } catch (error) {
            console.log('Failed to submit the create, please try again', error)
        }

    } 
return (
<div>
    <div className=" w-96 mx-auto my-4 ">
        <div className="font text-5xl text-center py-4 text-sky-500 font-bold ">TechTop</div>
        <form className="border-gray-200 border rounded-lg" >
        <p className="font-medium text-2xl p-4 mx-4 font-sans">Sign In</p>

        <label htmlFor="name" className="mt-8 w-80 mx-8 ">Your name</label><br />
        <input type="text" id='name' name='name' className="w-80 mx-8 border rounded-md mb-2 p-1"
         placeholder="First and last name" value={data.name} onChange={handleChange} required/><br />

        <label htmlFor="emailPhone" className="my-2 w-80 mx-8 ">Email or mobile phone number</label><br />
        <input type="text" id='emailPhone' name="ePhone" className="w-80 mx-8 border rounded-md mb-2 p-1" 
        value={data.ePhone} onChange={handleChange} required /><br />

        <label htmlFor="Password" className="my-2 w-80 mx-8 ">Password</label><br />
        <input type="password" id='Password' name="password" className="w-80 mx-8 border rounded-md mb-2 p-1" 
        value={data.password} onChange={handleChange} required/><br />

        <label htmlFor="repassword" className="my-2 w-80 mx-8 ">Re-enter password</label><br />
        <input type="password" id='repassword' name='rePassword' className="w-80 mx-8 border rounded-md mb-2 p-1"
         value={data.rePassword} onChange={handleChange}  required /><br />

        <input type="submit" value='Continue' className="bg-yellow-300 my-2 rounded-xl border border-yellow-400 py-1 hover:bg-yellow-400
                 hover:border-none w-80 mx-8 hover:cursor-pointer" onClick={handleSubmit} />

        <p className="text-sm mx-auto w-80 my-3">By continuing, you agree to TechTops's
            <Link  to='https://www.termsfeed.com/blog/privacy-policy-url/' className="text-sky-400 hover:underline">
            Conditions of Use and Privacy Notice
            </Link>
        </p>
        <p className="my-2 w-80 mx-8 text-sm  ">Already have an account? <Link className="text-sky-400 hover:underline" to='/signin'>Sign in</Link></p>
        </form>
    </div>
</div>
)
}

export default CreateAccount