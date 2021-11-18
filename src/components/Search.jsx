import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
/* import { useDebounce } from 'use-debounce'; */
import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links';

export const Search = () => {
    const [text,setText]=useState('Elon Musk');
    const {setSearchTerm} = useResultContext();
    /* const [debouncedValue]=useDebounce(text, 5000); */

    /* useEffect(()=>{
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue]); */
    return (
        <div className="relative sm:ml-32 md:ml-48 sm:-mt-10 mt-3">
            <input
                value={text}
                type="text"
                className="sm:w-96 w-80 h-10 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg dark:bg-gray-200"
                placeholder="Search google or url"
                onChange={(e)=>setText(e.target.value)}
            />
            {text && (
                <button type="button" className="absolute top-2 right-4 text-3xl text-gray-500" onClick={(e)=>setSearchTerm(text)}>
                    <AiOutlineSearch/>
                </button>
            )}
            <Links />
        </div>
    )
}

