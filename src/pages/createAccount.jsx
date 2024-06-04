import { Link } from "react-router-dom"

const SignIn = () => {
return (
<div>
    <div className=" w-96 mx-auto my-4 ">
        <div className="font text-5xl text-center py-4 text-sky-500 font-bold ">TechTop</div>
        <form className="border-gray-200 border rounded-lg">
        <p className="font-medium text-2xl p-4 mx-4 font-sans">Sign In</p>

        <label htmlFor="name" className="mt-8 w-80 mx-8 ">Your name</label><br />
        <input type="text" id='name' className="w-80 mx-8 border rounded-md mb-2 p-1" placeholder="First and last name" /><br />

        <label htmlFor="emailPhone" className="my-2 w-80 mx-8 ">Email or mobile phone number</label><br />
        <input type="text" id='emailPhone' className="w-80 mx-8 border rounded-md mb-2 p-1"  /><br />

        <label htmlFor="Password" className="my-2 w-80 mx-8 ">Password</label><br />
        <input type="password" id='Password' className="w-80 mx-8 border rounded-md mb-2 p-1" /><br />

        <label htmlFor="repassword" className="my-2 w-80 mx-8 ">Re-enter password</label><br />
        <input type="password" id='repassword' className="w-80 mx-8 border rounded-md mb-2 p-1" /><br />

        <input type="submit" value='Continue' className="bg-yellow-300 my-2 rounded-xl border border-yellow-400 py-1 hover:bg-yellow-400
                 hover:border-none w-80 mx-8 hover:cursor-pointer" onClick={(e)=>{e.preventDefault()}} />
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

export default SignIn