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

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities?email=${user.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const facilities = await res.json();
    // console.log(facilities);

    return (
        <>
            <div className="px-5">
                {
                    facilities.length === 0 ? <div className=" mt-30 card dark:bg-zinc-800 mx-auto max-w-7xl w-full px-5 shadow-lg">
                        <div className="flex flex-col justify-center items-center mt-20 w-full max-w-md mx-auto py-10">
                            <h1 className="font-bold text-xl mb-10">Manage Facility</h1>
                            <h2 className="text-xl font-bold mb-1">No Facilities Added Yet</h2>
                            <p className="text-sm mb-6">Add new facility</p>
                            <Link
                                href="/add-facilities"
                                className="bg-green-500 hover:bg-green-700 text-white font-medium px-3 py-1 rounded-xl transition shadow-sm inline-block"
                            >
                                Add Facility
                            </Link>
                        </div>
                    </div> : <HandleFacility facilities={facilities}></HandleFacility>
                }
            </div>
        </>
    )
};

export default ManageFacilitiesPage;