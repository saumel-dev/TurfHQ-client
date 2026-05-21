'use client'
import { authClient } from "@/app/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const MyBookingsPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleCancel = async (bookingId) => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
            method: 'DELETE',
            headers: {
                "authorization": `Bearer ${tokenData?.token}`
            }
        });
        if (res.ok) {
            alert("Deleted Successfully");
            // redirect('/my-bookings')
            setBookings(prev => prev.filter(booking => booking._id !== bookingId));
        }
    };

    useEffect(() => {
        if (!user?.email) return;

        const fetchBookings = async () => {
            try {
                const { data: tokenData } = await authClient.token();
                const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                    headers: {
                        "authorization": `Bearer ${tokenData?.token}`
                    }
                });
                const data = await res.json();
                setBookings(data);
            }
            finally {
                setLoading(false);
            }
        };


        fetchBookings();
    }, [user?.email]);

    if (loading) return <p className="text-center py-10 font-medium">Loading...</p>;

    return (
        <div className="w-full max-w-4xl mx-auto px-5 py-10">
            <h1 className="text-2xl text-center font-bold text-gray-800 mb-6">My Bookings</h1>
            {
                bookings.length === 0 ? <div className="flex flex-col justify-center items-center card mt-20">
                    <h2 className="text-xl font-bold text-gray-800 mb-1">No bookings yet</h2>
                    <p className="text-sm text-gray-400 mb-6">Start by exploring our facilities</p>
                    <Link
                        href="/all-facilities"
                        className="bg-green-500 hover:bg-green-700 text-white font-medium px-3 py-1 rounded-xl transition shadow-sm inline-block"
                    >
                        Browse Facilities
                    </Link>
                </div> : <div className="flex flex-col gap-4">
                    {bookings.map((booking) => (
                        <div
                            key={booking._id}
                            className="w-full border rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <div className="relative w-24 h-20 rounded-xl">
                                    <Image
                                        src={booking.image}
                                        alt={booking.facility_type}
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg capitalize">
                                        {booking.facility_type}
                                    </h3>
                                    <div className="text-sm text-gray-600 space-y-0.5">
                                        <p><span className="font-semibold uppercase  text-[11px]">Date:</span> {booking.booking_date}</p>
                                        <p><span className="font-semibold uppercase text-[11px]">Slot:</span> {booking.time_slot}</p>
                                    </div>
                                    <p className="text-sm font-bold text-green-500">
                                        {booking.total_price} BDT
                                    </p>
                                </div>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-sky-200/50">
                                <span className="uppercase text-[11px] font-semibold bg-yellow-200 px-2 py-1 rounded-full">
                                    {booking.status}
                                </span>
                                <button
                                    onClick={() => handleCancel(booking._id)}
                                    className="text-sm font-semibold text-red-600 bg-red-100 px-2 rounded-full cursor-pointer"
                                > Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
};

export default MyBookingsPage;