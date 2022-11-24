import React, { useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const Nav = () => {
  const [hide, setHide] = useState(false);
  const [click, setClick] = useState(false);
  return (
    <div className="w-full bg-white h-16 shadow-lg">
      <nav className="flex items-center text-center">
        <a href="/">
          <BsPinterest />
        </a>
        <a href="/">
          <h1>Home</h1>
        </a>
        {/* select list */}
        <div>
          <div
            className="cursor-pointer flex flex-row"
            onClick={() => setHide(!hide)}
          >
            <h1>Create</h1>
            <p>
              <BiChevronDown />
            </p>
          </div>
          <div className={hide ? `hidden` : "block"}>
            <p>Create Idea Pin</p>
            <p>Create Pin</p>
          </div>
        </div>
        {/* searchbar */}
        <div className="flex flex-row border-solid cursor-text border-2 active:border-blue-600">
          <input
            type="search"
            className="border-none focus:border-none active:border-none"
            placeholder="Search"
          />
          <i>
            <AiOutlineSearch />
          </i>
        </div>
        {/* stuff */}
        <div className="flex">
          <IoIosNotifications />
          <BsFillChatDotsFill />
          <div className="flex">
            <CgProfile />
            <BiChevronDown
              onClick={() => setClick(!click)}
              className="cursor-pointer"
            />
          </div>
          {/* profile details */}
          <div className={click ? `hidden` : `block`}>
            <div>
              <h3>Currently in</h3>
              <div>
                <img src=""/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
