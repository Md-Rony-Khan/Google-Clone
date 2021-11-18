import React from 'react';
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({darkTheme,setDarkTheme}) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap justify-center items-center sm:justify-between border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to='/'>
                    <p className="px-2 py-1 mb-2 text-2xl bg-blue-500 font-bold text-white rounded dark:bg-gray-500 dark:text-gray-900">
                        Google
                    </p>
                </Link>
                <button type="button" onClick={()=> setDarkTheme(!darkTheme)} className="px-2 py-1 mb-2 text-xl bg-gray-900 text-gray-200 rounded-full dark:bg-gray-200 dark:text-gray-900 hover:shadow-lg">
                    {darkTheme ? (<BsSun/>) : (<BsFillMoonFill/>)}
                </button>
            </div>
            <Search />
        </div>
    )
}
