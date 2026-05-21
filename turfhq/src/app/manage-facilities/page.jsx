import { headers } from "next/headers";
import { auth } from "../lib/auth";
import Link from "next/link";
import Image from "next/image";
import HandleFacility from "./HandleFacility";

const ManageFacilitiesPage = async () => {
    const { user } = await auth.api.getSession({
        headers: await headers()
    });

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const res = await fetch(`http://localhost:5000/my-facilities?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const facilities = await res.json();
    console.log(facilities);

    return (
        <>
            {
                facilities.length === 0 ? <div className="flex flex-col justify-center items-center card mt-20">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">No Facilities Added Yet</h2>
                    <p className="text-sm text-gray-400 mb-6">Add new facility</p>
                    <Link
                        href="/add-facilities"
                        className="bg-green-500 hover:bg-green-700 text-white font-medium px-3 py-1 rounded-xl transition shadow-sm inline-block"
                    >
                        Add Facility 
                    </Link>
                </div> : <HandleFacility facilities={facilities}></HandleFacility>
            }
        </>
    )
};

export default ManageFacilitiesPage;