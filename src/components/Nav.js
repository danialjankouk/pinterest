import React, { useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
// images
import ax from "../assets/pro.jpg";
//css
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const [hide, setHide] = useState(true);
  const [click, setClick] = useState(true);
  const [change, setChange] = useState("");
  const [opt, setOpt] = useState("create");
  const changeHandler = (e) => {
    setChange(e.target.value);
  };
  return (
    <>
      <div className="bg-white h-16 fixed z-20 w-full shadow-lg flex justify-evenly items-center">
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
            <select value={opt} onChange={(e) => setOpt(e.target.value)}>
              <option value="create">Create</option>
              <option value="create1">Create Idea Pin</option>
              <option value="pin">Create Pin</option>
            </select>
          </div>
          {/* searchbar */}
          <div className="flex bg-[#E9E9E9] p-1 mr-10 flex-row rounded-2xl border-solid cursor-text border-2 active:border-blue-600">
            <i className="text-[#767676] font-bold text-xl pr-2 items-center">
              <AiOutlineSearch />
            </i>
            <input
              type="search"
              value={change}
              className="border-none md:w-[50rem] md:block hidden focus:border-none active:border-none"
              placeholder="Search"
              onChange={changeHandler}
            />
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
          <div onClick={() => setClick(!click)}>
            <img
              src={ax}
              className="w-10 h-10 rounded-full text-slate-500 cursor-pointer text-2xl"
              alt="prof"
            />
          </div>
        </nav>
      </div>
      {/* -------------------------------------stuff -----------------------*/}
      <div className="flex justify-end relative z-10">
        <div
          className={`${
            click
              ? `hidden`
              : `flex p-5 mt-[5rem] mr-5 bg-white rounded-xl shadow-xl`
          }`}
        >
          {/* profile details */}
          <div>
            {/* currently in */}
            <div>
              <h6 className="font-light text-sm text-gray-700">Currently in</h6>
              <div className="flex mt-2 hover:cursor-pointer hover:bg-gray-200 rounded-md p-2 w-full">
                <img
                  src={ax}
                  alt="profile"
                  className="w-16 h-16 rounded-full"
                />
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
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                setting
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                tune your home feed
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                install the windows app
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                your privacy rights
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                get help
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                see terms of service
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                see privacy policy
              </p>
              <p className="hover:bg-gray-200 cursor-pointer rounded-md p-1">
                <Link to="/">log out</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
