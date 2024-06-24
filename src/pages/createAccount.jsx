import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const CreateAccount = () => {
    const [data, setData] = useState({
        name: '',
        email: "",
        password: ''
      });
      
      const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value });
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        try {
          axios.post(`http://localhost:8000/sign-up`, data)
          .then(res=> console.log(res));
        } catch (error) {
          console.error('Error in creating the user');
        }finally {
            setData(
                {
                name: '',    
                email: "",
                password: ''
                }
            )
        }
      } 
return (
<div>
    <div className=" w-96 mx-auto my-4 ">
        <div className="font text-5xl text-center py-4 text-sky-500 font-bold ">TechTop</div>


    <form onSubmit={handleSubmit} className="border-gray-200 border rounded-lg">
    <p className="font-medium text-2xl p-4 mx-4 font-sans">Sign Up</p>
      <label htmlFor="name" className="mt-8 w-80 mx-8 ">Name: </label>
      <input type="text" name='name' value ={data.name} onChange={handleChange} 
      className="w-80 mx-8 border rounded-md mb-2 p-1" required/>

      <label htmlFor="email" className="my-2 w-80 mx-8 ">Email: </label>
      <input type="text" name='email' value ={data.email} onChange={handleChange}
      className="w-80 mx-8 border rounded-md mb-2 p-1" required/>

{/*       <label htmlFor="number" className="my-2 w-80 mx-8 ">Number</label>
      <input type="text" name='number' value ={data.number} onChange={handleChange} 
      className="w-80 mx-8 border rounded-md mb-2 p-1" required/> */}

      <label htmlFor="password" className="my-2 w-80 mx-8 ">Password: </label>
      <input type="password" name='password' value ={data.password} onChange={handleChange}
      className="w-80 mx-8 border rounded-md mb-2 p-1" required/>

    <button type='submit' className="bg-yellow-300 my-2 rounded-xl border border-yellow-400 py-1 hover:bg-yellow-400
                 hover:border-none w-80 mx-8 hover:cursor-pointer">Submit</button>
        
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