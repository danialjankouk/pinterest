import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosArrowDown} from "react-icons/io"
import {BsPinterest} from "react-icons/bs"
const Nav = () => {
    return (
        <div className='w-full container mx-auto '>
            <nav>
                <a href='/'>
                    <BsPinterest/>
                </a>      
                  
            </nav>
        </div>
    );
};

export default Nav;