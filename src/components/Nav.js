import React, { useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
// images
import ax from "../assets/pro.jpg";

const Nav = () => {
  const [hide, setHide] = useState(true);
  const [click, setClick] = useState(true);
  const [change, setChange] = useState("");
  const changeHandler = (e) => {
    setChange(e.target.value);
  };
  return (
    <div className="bg-white h-16 fixed z-10 -mt-5 w-full shadow-lg flex justify-evenly items-center">
      <nav className="flex justify-evenly items-center">
        <a href="/">
          <BsPinterest className="mr-10 text-red-600 text-2xl" />
        </a>
        <a
          href="/"
          className="mr-10 bg-black font-bold text-white p-3 px-5 rounded-3xl"
        >
          <h1>Home</h1>
        </a>
        {/* select list */}
        <div
          className={`${
            hide ? `` : ``
          } cursor-pointer flex mr-12 flex-row rounded-xl bg-slate-50 items-center shadow-sm`}
          onClick={() => setHide(!hide)}
        >
          <select className={`cursor-pointer bg-slate-50 rounded-xl`}>
            <option>Create</option>
            <option>Create Idea Pin</option>
            <option>Create Pin</option>
          </select>
        </div>
        {/* searchbar */}
        <div className="flex mr-10 focus:ring-4 flex-row rounded-xl border-solid cursor-text border-2 active:border-blue-600">
          <input
            type="search"
            className="border-none md:w-[40rem] md:block hidden focus:border-none active:border-none"
            placeholder="Search"
            onChange={changeHandler}
          />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        <IoIosNotifications
          className={`${
            click
              ? `mr-10 text-slate-500 cursor-pointer text-2xl`
              : `flex mr-10 text-slate-500 cursor-pointer text-2xl`
          }`}
        />
        <BsFillChatDotsFill
          className={`${
            click
              ? `mr-10 text-slate-500 cursor-pointer text-2xl`
              : `flex mr-10 text-slate-500 cursor-pointer text-2xl`
          }`}
        />

        <div
          onClick={() => setClick(!click)}
          className={`${click ? `` : `flex`}`}
        >
          <img
            src={ax}
            className="w-10 h-10 rounded-full text-slate-500 cursor-pointer text-2xl"
            alt="prof"
          />
        </div>
        {/* stuff */}
        <div className={`flex relative z-20 p-5 bg-white rounded-xl shadow-xl`}>
          {/* profile details */}
          <div className={click ? `hidden` : `block mt-[30rem]`}>
            {/* currently in */}
            <div>
              <h6 className="font-light text-sm text-gray-700">Currently in</h6>
              <div className="flex mt-2 hover:cursor-pointer hover:bg-gray-200 rounded-md p-2 w-full">
                <img src={ax} alt="profile" className="w-16 h-16 rounded-full" />
                <div className="pl-2 font-light text-sm text-gray-700">
                  <h1 className="font-bold text-black">dani.j</h1>
                  <p>personal</p>
                  <p>dani.jakook@gmail.com</p>
                </div>
              </div>
            </div>
            {/* your account */}
            <h6 className="font-light text-sm text-gray-700">Your account</h6>
            <div className="flex flex-col mt-2 hover:cursor-pointer hover:bg-gray-200 rounded-md p-2 w-full">
              <h1>add account</h1>
              <div>convert to business</div>
            </div>
            {/* more option */}
            <h6 className="font-light text-sm text-gray-700">More option</h6>
            <div>
              <p>setting</p>
              <p>tune your home feed</p>
              <p>install the windows app</p>
              <p>your privacy rights</p>
              <p>get help</p>
              <p>see terms of service</p>
              <p>see privacy policy</p>
              <p>log out</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
