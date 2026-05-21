"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState(searchParams.get("searchTerm") || "");
    const [type, setType] = useState(searchParams.get("type") || "");

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set("searchTerm", search);
        }
        else {
            params.delete("searchTerm");
        }
        router.push(`/all-facilities?${params.toString()}`);
    }
    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        setType(selectedType);

        const params = new URLSearchParams(searchParams.toString());

        if (selectedType) {
            params.set("type", selectedType);
        } else {
            params.delete("type");
        }

        router.push(`/all-facilities?${params.toString()}`);
    };

    return (
        <div className="relative flex items-center bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-green-500 transition-all overflow-hidden max-w-5xl mx-auto my-5">

            <div className="pl-5 text-slate-400">
                <BiSearch></BiSearch>
            </div>

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for facilities"
                className="flex-1 h-14 px-4 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
            />

            <button onClick={handleSearch}
                className="h-10 px-6 mr-2 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
                Search
            </button>
            <select onChange={handleTypeChange} className="border h-10 px-6 mr-2 rounded-xl border-green-500 bg-white font-semibold">
                <option disabled hidden value="">Filter by Facility Type</option>
                <option value="Football">Football</option>
                <option value="Cricket">Cricket</option>
                <option value="Tennis">Tennis</option>
                <option value="Basketball">Basketball</option>
                <option value="Swimming">Swimming</option>
                <option value="Badminton">Badminton</option>
                <option value="8 Ball Pool">8 Ball Pool</option>
                <option value="Calisthenics">Calisthenics</option>
                <option value="Volleyball">Volleyball</option>
            </select>
        </div>
    );
};

export default SearchBar;