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
  return (
    <div className="bg-white h-16 shadow-lg flex justify-evenly items-center">
      <nav className="flex justify-evenly items-center">
        <a href="/">
          <BsPinterest className="mr-10 text-red-600 text-2xl" />
        </a>
        <a href="/" className="mr-10">
          <h1>Home</h1>
        </a>
        {/* select list */}
        <div
          className={`${
            hide ? `` : ``
          } cursor-pointer flex mr-10 flex-row rounded-xl bg-slate-50 items-center shadow-sm`}
          onClick={() => setHide(!hide)}
        >
          <select className={`cursor-pointer bg-slate-50 rounded-xl`}>
            <option>Create</option>
            <option>Create Idea Pin</option>
            <option>Create Pin</option>
          </select>
        </div>
        {/* searchbar */}
        <div className="flex mr-10 flex-row rounded-xl border-solid cursor-text border-2 active:border-blue-600">
          <input
            type="search"
            className="border-none md:w-[40rem] md:block hidden focus:border-none active:border-none"
            placeholder="Search"
          />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        {/* stuff */}
        <div className="flex">
          <IoIosNotifications className={`${click ? `mr-10 text-slate-500 cursor-pointer text-2xl mt-2` : `flex mt-[27rem] mr-10 text-slate-500 cursor-pointer text-2xl`}`} />
          <BsFillChatDotsFill className={`${click ? `mr-10 text-slate-500 cursor-pointer text-2xl mt-2` : `flex mt-[27rem] mr-10 text-slate-500 cursor-pointer text-2xl`}`} />
          <div onClick={() => setClick(!click)} className={`${click ? `` : `flex mt-[27rem]`}`}>
            <img
              src={ax}
              className="w-10 h-10 rounded-full text-slate-500 cursor-pointer text-2xl"
            />
          </div>
          {/* profile details */}
          <div className={click ? `hidden` : `block mt-[30rem] `}>
            {/* currently in */}
            <div>
              <h3>Currently in</h3>
              <div>
                <img src={ax} alt="profile" className="w-20"/>
                <h1>user</h1>
                <p>personal</p>
                <p>dani.jakook@gmail.com</p>
              </div>
            </div>
            {/* your account */}
            <div>
              <h1>add account</h1>
              <div>convert to business</div>
            </div>
            {/* more option */}
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
