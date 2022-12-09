import React, { useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//style
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const redirectHandler = ()=>{
    navigate("/dashboard")
  }
  return (
    <div className="bg-slate-400 h-screen flex justify-center items-center">
      <div className="bg-white rounded-xl items-center justify-evenly flex flex-col w-[30%] h-[90%] ">
        <BsPinterest className="text-red-600 text-4xl" />
        <h1 className="text-xl font-bold">Log in to see more</h1>
        <form className="flex flex-col">
          <div className="flex flex-col">
            <label className="text-slate-500">Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className="border border-blue-200 ring-4 rounded-xl p-2 mt-2 mb-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-500">Password</label>
            <input
              type="text"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              placeholder="Password"
              className="border border-blue-200 ring-4 rounded-xl p-2 mt-2"
            />
          </div>
        </form>
        <p className="cursor-pointer">Forgot your password?</p>
        <button onClick={redirectHandler} className="bg-red-600 p-2 rounded-3xl w-[55%] items-center justify-center text-white font-bold">
          Log in
        </button>
        <p>OR</p>
        <button onClick={redirectHandler} className="bg-blue-600 p-2 flex rounded-3xl w-[55%] items-center justify-center text-white font-bold">
          <BsFacebook className="text-xl mr-2" /> continue with Facebook
        </button>
        {/* deteails */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-slate-500">
            By continuing you agree to Pinteret's
          </p>
          <p className="text-slate-500">
            <span className="text-black font-bold">Terms of Service</span> and
            acknowledge you've read our
          </p>
          <p className="text-black font-bold">
            Privacy Policy. Notice at collection
          </p>
        </div>
        <hr className="line"></hr>
        <p>
          Not on Pinterest yet? signup
        </p>
        <p>Are you a buisiness? Get started here!</p>
      </div>
    </div>
  );
};

export default Login;
