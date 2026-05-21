"use client";

import { BiSearch } from "react-icons/bi";

const SearchBar = () => {

    return (
        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-green-500 transition-all overflow-hidden max-w-5xl mx-auto my-5">

            <div className="pl-5 text-slate-400">
                <BiSearch></BiSearch>
            </div>

            <input
                type="text"
                placeholder="Search for facilities"
                className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            />

            <button
                className="h-10 px-6 mr-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
                Search
            </button>
            <select className="border h-10 px-6 mr-2 rounded-xl border-green-500 bg-white font-bold">
                <option value="">Filter by Facility Type</option>
                <option>Football</option>
                <option>Tennis</option>
                <option>Vollyball</option>
                <option>Cricket</option>
                <option>Badminton</option>
                <option>Basketball</option>
                <option>Swimming</option>
                <option>Table Tennis</option>
                <option>8 Ball Pool</option>
                <option>Calisthenics</option>
            </select>
        </div>
    );
};

export default SearchBar;